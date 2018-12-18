import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { OuterContainer, InnerContainer } from './style';

const Header = () => (
  <OuterContainer>
    <InnerContainer>Logo</InnerContainer>
    <InnerContainer>Header Menu</InnerContainer>
  </OuterContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header;
