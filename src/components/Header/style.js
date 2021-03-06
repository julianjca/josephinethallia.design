import styled, { css } from 'styled-components';
import { BLUE, PINK } from '../../styles/colors';

export const OuterContainer = styled.div`
display : grid;
grid-template-columns : 1fr 2.5fr;
background-color : ${ BLUE };
height : 80px;
position : absolute;
left : 0;
right : 0;
`;

export const InnerContainer = styled.div`
display : flex;
justify-content : center;
align-items : center;
${props=>props.right && css`
  justify-content : flex-end;
  padding-right : 5%;
`}
`;

export const Li = styled.li`
list-style : none;
color : ${ PINK };
display : inline-block;
padding-right : 50px;
font-size : 0.9rem;
`;

export const Ul = styled.ul`
display : inline-block;
`

export const H2 = styled.h2`
font-family : 'Fjalla One';
color : ${ PINK };
font-size : 1.3rem;
`