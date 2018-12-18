import styled, { css } from 'styled-components';
import { BLUE, PINK } from './colors';

export const Landing = styled.div`
background-color : ${BLUE};
/* Firefox */
height: -moz-calc(100vh - 18px);
/* WebKit */
height: -webkit-calc(100vh - 18px);
/* Opera */
height: -o-calc(100vh - 18px);
/* Standard */
height: calc(100vh - 18px);
width : 100%;
`