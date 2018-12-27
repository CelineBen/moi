import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MenuContainer = styled.div`
  text-align: center;
  padding-top: 1.5rem;
`;

const MenuItem = styled(Link)`
  display: inline-block;
  background-image: none;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  
  &:not(:last-child):after {
    content: '●';
    margin: 0 10px;
    color: #1ca086;
  }
`;

const Menu = () => (
  <MenuContainer>
    <MenuItem to='/'>céline</MenuItem>
    <MenuItem to='/gallery'>gallery</MenuItem>
  </MenuContainer>
);

export default Menu;