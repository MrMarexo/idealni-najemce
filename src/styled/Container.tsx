import styled, { css } from 'styled-components';

// created a custom configurable container component which i use throughout the whole app 

interface ContainerProps {
    border?: boolean;
    column?: boolean;
    row?: boolean;
    flex?: string;
    position?: string;
    justaround?: boolean;
    justbetween?: boolean;
    justcenter?: boolean;
    juststart?: boolean;
    juststretch?: boolean;
    aligncenter?: boolean;
    alignstart?: boolean;
    alignstretch?: boolean;
    minheight?: string;
    height?: string;
    width?: string;
    padding?: string;
    margin?: string;  
};

export default styled.div<ContainerProps>`
    padding: 1rem;
    margin: 1rem;

    ${({border}) => border && css`
        border: 1px solid ${props => props.theme.primaryColor };
        border-radius: .8rem;
    `}

    ${({column}) => column && css`
        display: flex;
        flex-direction: column;
    `};

    ${({row}) => row && css`
        display: flex;
        flex-direction: row;
    `};

    flex: ${({flex}) => flex};

    position: ${({position}) => position};

    ${({justaround}) => justaround && css`
        display: flex;
        justify-content: space-around;
    `}

    ${({justbetween}) => justbetween && css`
        display: flex;
        justify-content: space-between;
    `}

    ${({justcenter}) => justcenter && css`
        display: flex;
        justify-content: center;
    `}

    ${({juststart}) => juststart && css`
        display: flex;
        justify-content: flex-start;
    `}

    ${({juststretch}) => juststretch && css`
        display: flex;
        justify-content: stretch;
    `}

    ${({aligncenter}) => aligncenter && css`
        display: flex;
        align-items: center;
    `}

    ${({alignstart}) => alignstart && css`
        display: flex;
        align-items: flex-start;
    `}

    ${({alignstretch}) => alignstretch && css`
        display: flex;
        align-items: stretch;
    `}

    ${({minheight}) => minheight && css`
        min-height: ${minheight};
    `}

    ${({height}) => height && css`
        height: ${height};
    `}

    ${({width}) => width && css`
        width: ${width};
    `}

    ${({padding}) => padding && css`
        padding: ${padding};
    `}

    ${({margin}) => margin && css`
        margin: ${margin};
    `}

`;