import React from 'react';

import styled from 'styled-components';

//using formik to handle forms and material-ui for design
import { Formik, Form, useField, Field, FieldAttributes } from 'formik';
import { Checkbox, FormControlLabel, Select, MenuItem } from '@material-ui/core';

import Container from './styled/Container';
import breakpoints from './styled/breakpoints';

//the Formik's field component used for checkboxes wasnt compatible with material-ui's formcontrollabel
//had to use this one because the Checkbox comp from Material-UI didn't have labels 
type MyCheckboxProps = {label: string} & FieldAttributes<{}>;

const MyCheckbox: React.FC<MyCheckboxProps> = ({label, ...props}) => {
    const [field] = useField(props);
    return <FormControlLabel {...field} control={<Checkbox />} label={label} />
}

const Head = styled.h2`
    color: ${(props) => props.theme.primaryColor};
    @media ${breakpoints.w430} {
        font-size: 1.2rem;
    }
`;

const SubHead = styled.h3`
    margin-bottom: 0;
    color: ${(props) => props.theme.primaryColor};
`;

const MyForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Submit = styled.button`
    font-size: 1.2rem;
    background: ${(props) => props.theme.contrastColor};
    color: ${(props) => props.theme.secondaryColor};
    border: 1px solid transparent;
    border-radius: .8rem;
    font-family: ${(props) => props.theme.font};
    margin: 1rem 0;
    padding: .5rem .5rem;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        border-color: ${(props) => props.theme.contrastColor};
        background: ${(props) => props.theme.secondaryColor};
        color: ${(props) => props.theme.contrastColor};
    }
`;


const DISPO_OPTIONS = ['1', '2', '3', '1+1', '4', '5'];
const CITIES = ['all', 'New York', 'San Francisco', 'Los Angeles', 'Detroit', 'Washington', 'Atlanta'];

interface Props {
    searchHandler: (dispositionArr: Array<string>, city: string) => void;
};

const SearchForm:React.FC<Props> = ({searchHandler} ) => {
    return (
        <Container column juststart aligncenter margin="0" padding="0">
            <Head>What are you looking for?</Head>
            <Formik initialValues={{dispositions: DISPO_OPTIONS, city: 'all'}} onSubmit={(data) => {
                searchHandler(data.dispositions, data.city);
            }}>
                {({values}) => (
                    
                    <MyForm>
                        <SubHead>Disposition:</SubHead>
                        {DISPO_OPTIONS.map(el => <MyCheckbox name="dispositions" type="checkbox" value={el} label={el} key={el}/>)}
                        <SubHead>City:</SubHead>
                        <Container margin="1rem 0" padding="0">
                            <Field name="city" type="select" as={Select}>
                                {CITIES.map(el => <MenuItem value={el} key={el}>{el === 'all' ? 'All cities' : el}</MenuItem>)}
                            </Field>
                        </Container>
                        <Submit type="submit">Search</Submit>
                    </MyForm>
                )}
            </Formik>
        </Container>
        
    );
};

export default SearchForm;  