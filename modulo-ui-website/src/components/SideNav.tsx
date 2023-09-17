import { Outlet, Link } from "react-router-dom";
import styled from '@emotion/styled';
import Dropdown from '../Dropdown';

const SideNavContainer = styled.nav`
  position: fixed;
  display: block;
  top: 7.5em;
  width: 190px;
  height: 100%;
  overflow-x: hidden;
  border-right: 1px gray solid;

  @media (max-width: 760px) {
    display: none;
  }

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
const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SideNav = () => {
  return (
    <>
    <SideNavContainer>
      <ul>
      <Link to="/installation">Installation</Link>
        <li>         
          <Dropdown
            trigger={
              <a href="#">
                Components
              </a>
            }
          >
            <SubMenu>
                 <Link to="/buttons">Buttons</Link>
                 <Link to="/cards">Cards</Link>
                 <Link to="/controls">Controls</Link>
                <Link to="/inputs">Inputs</Link>
                <Link to="/overlay">Overlay</Link>
            </SubMenu>
          </Dropdown></li>
        <li><a href="#">More about Módulo</a></li>
      </ul>
    </SideNavContainer>
    <Outlet />

    </>
  );
};

export default SideNav;