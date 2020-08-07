import React from 'react';

import Container from './styled/Container';
import { MainHead, Photo } from './styled/General';
import breakpoints from './styled/breakpoints';

import styled from 'styled-components';

const ContactsContainer = styled(Container)`
    @media ${breakpoints.w1320} {
        flex-direction: column;
    };
    
`;

const Contacts = styled.h2`
    @media ${breakpoints.w640} {
        font-size: 1rem;
    };
`;

const StyledMainHead = styled(MainHead)`
    @media ${breakpoints.w888} {
        font-size: 3rem;
    };
    @media ${breakpoints.w640} {
        font-size: 1.8rem;
    };
    @media ${breakpoints.w430} {
        font-size: 1.3rem;
    };
`;

const Contact: React.FC = () => {
    return(
        <Container column juststart aligncenter border>
            <StyledMainHead>You can find us anywhere</StyledMainHead>
            <ContactsContainer row justaround aligncenter width="80%">
                <Contacts>870-578-8730</Contacts>
                <Contacts>contact@homefinder.com</Contacts>
                <Contacts>566 Rainy Day Drive, California</Contacts>
            </ContactsContainer>
            <Photo src="/worldmap.jpg" alt="world"/>
        </Container>
    );
};

export default Contact;