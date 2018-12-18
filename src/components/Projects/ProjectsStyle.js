import styled, { css } from 'styled-components';
import { BLUE, PINK } from '../../styles/colors';

export const Container = styled.div`
width : 100%;
display : flex;
justify-content : center;
align-items : center;
background-color : #FFF;
color : ${ BLUE };
min-height : 100vh;
padding-bottom : 10%;
flex-direction : column;
`;

export const H2 = styled.h2`
font-size : 2.2rem;
font-family : 'Fjalla One';
text-transform : uppercase;
`;

export const H3 = styled.h2`
padding-top : 5%;
font-size : 1.5rem;
font-family : 'Fjalla One';
text-transform : uppercase;
`;

export const GridContainer = styled.div`
display : grid;
grid-template-columns : 1fr 1fr;
grid-gap : 50px;
width : 80%;
letter-spacing : 5px;
`;