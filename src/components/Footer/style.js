import styled, { css } from 'styled-components';
import { BLUE, PINK } from '../../styles/colors';

export const OuterContainer = styled.div`
background-color : ${ BLUE };
height : 50vh;
width : 100%;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`;

export const Button = styled.a`
background-color : ${ PINK };
padding : 1% 4%;
border-radius : 30px;
color : ${ BLUE };
justify-content : center;
`;

export const Ul = styled.ul`
display : inline-block;
`;

export const H2 = styled.h2`
font-family : 'Fjalla One';
color : ${ PINK };
font-size : 2rem;
font-weight : 300;
letter-spacing : 2px;
`;