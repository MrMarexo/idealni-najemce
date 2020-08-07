import React from 'react';

import styled from 'styled-components';

import Flat from './Flat';
import Pagination from './Pagination';

import { GeneralHouseData } from './interfaces/interfaces';
import breakpoints from './styled/breakpoints';

const Grid = styled.div`
    margin: 1rem;
    display: grid;
    width: 100%;
    min-height: 70vh;
    grid-template-columns: repeat(auto-fill, 35vh);
    justify-content: center;
`;

const Loading = styled.div`
    font-size: 2rem;
    font-weight: 200;
`;

const Title = styled.h1`
    @media ${breakpoints.w430} {
        font-size: 1.5rem;
    }
`;
 

interface Props {
    loading: boolean;
    flatsInPage: GeneralHouseData[];
    numberOfFindings: number;
};

const Flats: React.FC<Props> = ({loading, flatsInPage, numberOfFindings}) => {
    return (
        <>
            <Title><i>"Choose your dream home"</i></Title>
            <Pagination />
            {loading ? null : <p>{`Total number of houses: ${numberOfFindings}`}</p>}
            <Grid>
                {loading ? <Loading>Loading...</Loading> : (flatsInPage as GeneralHouseData[]).map(flat => <Flat key={flat.id} id={flat.id}
                title={flat.title} price={flat.price} disposition={flat.disposition} city={flat.city} url={flat.smallUrl}/>)}
            </Grid>
            <Pagination />
            
        </>
    );
};

export default Flats;