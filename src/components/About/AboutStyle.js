import styled, { css } from 'styled-components';
import { BLUE, PINK } from '../../styles/colors';

export const Container = styled.div`
width : 100%;
display : flex;
justify-content : center;
align-items : center;
background-color : #FFF;
color : ${ BLUE };
height : 50vh;
flex-direction : column;
`;

export const H2 = styled.h2`
font-size : 2.2rem;
font-family : 'Fjalla One';
text-transform : uppercase;
`;

export const P = styled.p`
font-size : 1.2rem;
text-align : center;
width : 100%;
`;