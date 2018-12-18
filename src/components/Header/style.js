import styled from 'styled-components';
import { BLUE, PINK } from '../../styles/colors';

export const OuterContainer = styled.div`
display : grid;
grid-template-columns : 1fr 3fr;
background-color : ${ BLUE };
`

export const InnerContainer = styled.div`
display : flex;
justify-content : center;
align-items : center;
`