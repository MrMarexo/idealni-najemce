import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Container from './styled/Container';
import breakpoints from './styled/breakpoints';
import { Photo, Loading } from './styled/General';

import { specificData } from './Data';

import { RouteComponentProps } from 'react-router';


const Title = styled.h1`
    font-size: 4rem;
    margin-top: 0;
    flex: 1;
    @media ${breakpoints.w1320} {
        font-size: 3rem;
    }
`;

const SectionTitle = styled.h3`
    margin-bottom: 0;
`; 

const Span = styled.span`
    font-weight: 200;
`;

const MainContainer = styled(Container)`
    @media ${breakpoints.w1320} {
        flex-direction: column;
    }
    @media ${breakpoints.w1045} {
        margin: 0;
        padding: 0;
    }
`;

const TextContainer = styled(Container)`
    @media ${breakpoints.w1320} {
        min-height: auto;
    }
`;


interface HouseData {
  title: string;
  price: number;
  disposition: string;
  city: string;
  id: number;
  description: string;
  bigUrl: string;
};

type TParams = { id: string };

const HousePage = ({ match }: RouteComponentProps<TParams>) => {

    const [houseData, setHouseData] = useState<any>({});
    const [loading, setLoading] = useState(false);


    //getting specific houseData about a chosen house - simulating a usual procedure of getting houseData 
    useEffect(() => {
        setLoading(true);
        //simulates async function
        setTimeout(() => {
            const data = [...specificData];
            const houseData = data.find(el => el.id === parseInt(match.params.id));  
            setHouseData(houseData);
            setLoading(false);
        }, 600);
    }, []);

    return(
        <MainContainer row aligncenter justaround>
            {loading ? <Loading>Loading...</Loading> : (
            <>    
                <TextContainer column justbetween alignstart border minheight="60vh">
                    <Title>{houseData.title}</Title>
                    <h3>Price: <Span>{`$${houseData.price}`}</Span></h3>
                    <h3>Number of rooms: <Span>{houseData.disposition}</Span></h3>
                    <h3>City: <Span>{houseData.city}</Span></h3>
                    <SectionTitle>Description:</SectionTitle>
                    <p>{houseData.description}</p>
                </TextContainer>
                <Container justcenter alignstart border>
                    <Photo src={houseData.bigUrl} alt="image"/>
                </Container>
            </>
            )}

        </MainContainer>
        
    );
};

export default HousePage;