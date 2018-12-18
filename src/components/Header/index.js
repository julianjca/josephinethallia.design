import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { OuterContainer, InnerContainer, Ul, Li, H2 } from './style';

const Header = () => (
  <OuterContainer>
    <InnerContainer>
      <H2>JosephineThallia</H2>
    </InnerContainer>
    <InnerContainer right>
      <Ul>
        <Li>About</Li>
        <Li>Projects</Li>
        <Li>Contact</Li>

      </Ul>
    </InnerContainer>
  </OuterContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header;
