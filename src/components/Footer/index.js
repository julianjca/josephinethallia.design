import React from 'react';
import { OuterContainer, Button, H2, Ul, Li } from './style';

const Footer = () => (
  <OuterContainer>
    <H2>LET&apos;S GET IN TOUCH!</H2>
    <Button href="mailto:josephinethalia1412@gmail.com">email me</Button>
    <Ul>
      <Li><a href="https://instagram.com/josephinethallia">Instagram</a></Li>
      <Li><a href="">Behance</a></Li>
      <Li><a href="">Dribbble</a></Li>
      <Li><a href="">Twitter</a></Li>
    </Ul>
  </OuterContainer>
)

export default Footer;
