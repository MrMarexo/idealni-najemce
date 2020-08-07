import React from 'react';

import Container from './styled/Container';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const FlatCard = styled.div`
    margin: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 32vh;
    width: 30vh;
    background: ${(props) => props.theme.accentColor};
    transition: all .1s;
    color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
    &:hover {
        border-color: ${(props) => props.theme.contrastColor};
        color:${(props) => props.theme.contrastColor};
    }
`;

const Photo = styled.img`
    border-radius: 1rem;
    height: 200px; 
    width: 260px;
    object-fit: cover;
`;

const Title = styled.div`
    margin-bottom: .5rem;
    font-size: 1.3rem;
    padding: 0;
    font-weight: bold;
`;

const Text = styled.div`
    font-size: 1rem;
    font-weight: bold;
    padding: 0;
    margin-top: .5rem;
`;

const MyLink = styled(Link)`
    color: ${props => props.theme.primaryColor };
    text-decoration: none;
`;

interface Props {
    title: string;
    price: number;
    disposition: string;
    city: string;
    url: string;
    id: number;
};


const Flat: React.FC<Props> = ({title, price, disposition, city, url, id}) => {
    return(
        <Container justcenter aligncenter margin="0" padding="0">
            <MyLink to={`/houses/${id}`}>
                <FlatCard>
                    <Title>{title}</Title>
                    <Photo src={url}></Photo>
                    <Container margin="0" padding="0" row justbetween>
                        <Text>{city}</Text>
                        <Text>{`Disposition: ${disposition}`}</Text>
                    </Container>
                    <Text>{`Price: $${price}`}</Text>
                </FlatCard>
            </MyLink>
            
        </Container>
        
    );
};

export default Flat;