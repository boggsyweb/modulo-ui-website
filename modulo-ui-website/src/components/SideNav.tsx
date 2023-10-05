import { Outlet, Link } from "react-router-dom";
import styled from '@emotion/styled';
import Dropdown from '../hooks/dropdown';
import { useState } from "react";
import {FadeIn, FadeOut} from "../styles/transitions";

const SideNavContainer = styled.nav`
  position: fixed;
  top: 7.5em;
  width: 11.9em;
  height: 100%;
  overflow-x: hidden;
  border-right: 1px gray solid;
  line-height: 2;
  padding: 1em;

  @media (max-width: 760px) {
    display: none;
  }
  & svg {
    max-width: 1.8rem;
  }
  & a {
    display: flex;
    text-decoration: underline 2px #6901fb00;
    transition: .3s;

  &:hover  {
    background-color: #9244ff40;
  }
}
`;
const SubMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isOpen }) => (isOpen ? FadeIn() : FadeOut())}
`;

const Icon = styled.svg<{ isOpen: boolean }>` 
  width: 1.3rem;
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotateX(180deg)" : "rotateX(0deg)")};
`;

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <SideNavContainer>
      <Link to="/installation">Installation</Link> 
          <Dropdown
            trigger={
              <a href="#" onClick={toggleMenu}>
                Components         
                <Icon
                    isOpen={isOpen}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m19 9-7 7-7-7"
                      stroke="currentcolor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
              </a>        
            }
          >
            <SubMenu isOpen={isOpen}>
                 <Link to="/buttons">Buttons</Link>
                 <Link to="/cards">Cards</Link>
                 <Link to="/controls">Controls</Link>
                 <Link to="/inputs">Inputs</Link>
                 <Link to="/overlay">Overlay</Link>
            </SubMenu>
          </Dropdown>
          
        <Link to="/styling">Styling</Link>
        <Link to="/accessibility">Accessibility</Link>
      
    </SideNavContainer>
    <Outlet />

    </>
  );
};

export default SideNav;
