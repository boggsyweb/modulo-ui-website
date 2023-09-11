// import React from 'react';
import styled from '@emotion/styled';

const SideNavContainer = styled.nav`
  position: fixed;
  top: 7.5em;
  width: 190px;
  height: 100%;
  overflow-x: hidden;
  border-right: 1px gray solid;

  & ul {
    padding: 0 1em;
    line-height: 2;  
  }
  & a {
    text-decoration: underline 2px #6901fb00;
    transition: .3s;

  &:hover  {
    text-decoration: underline #6901FB 2px;
  }
}
`;

const SideNav = () => {
  return (
    <SideNavContainer>
      <ul>
        <li><a href="#">Installation</a></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">More about Módulo</a></li>
      </ul>
    </SideNavContainer>
  );
};

export default SideNav;
