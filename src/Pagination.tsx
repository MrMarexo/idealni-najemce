import React, {useContext} from 'react';

import styled, { css } from 'styled-components';

import Container from './styled/Container';

import { PaginationContext } from './Main';

const PageNumber = styled.button<{isCurPage: boolean}>`
    margin: 0 .2rem;
    padding: .2rem;
    font-size: 1rem;
    background: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.primaryColor};
    font-family:  ${(props) => props.theme.font};
    min-width: 2rem;
    border-color: ${(props) => props.theme.primaryColor};
    ${({isCurPage}) => isCurPage && css`
        background: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.secondaryColor};
    `}

    transition: all .1s;
    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.secondaryColor};
    }
`;


const Pagination = () => {
    const {currentPage, numberOfPages, setCurPageHandler, loading} = useContext(PaginationContext)!;

    const pages: number[] = [];
    for (let i = 1; i <= numberOfPages; i++ ) {
        pages.push(i);
    }

    return (
        <Container row justaround width="10%" margin="1rem 0" padding="0">
            {loading ? null : pages.map(p => <PageNumber isCurPage={currentPage === p ? true : false} onClick={() => setCurPageHandler(p)} key={p}>{p}</PageNumber>)}
        </Container>
    )
};

export default Pagination;

//() => setCurrentPage(p)