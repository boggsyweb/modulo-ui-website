import { Outlet, Link } from "react-router-dom";
import styled from '@emotion/styled';
import { IconButton } from "modulo-ui";
import useColorScheme from "../hooks/theme-colors";
import { FadeIn, FadeOut } from "../styles/transitions";
import LogoLight from '../assets/logo-indigo.webp'
import LogoDark from '../assets/logo-cyan.webp'
import Dropdown from '../hooks/dropdown';
import github from '../assets/github.svg';
import { useState } from "react";



const TopNav = styled.header`
    position: sticky;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 1px 6px 1px rgb(0, 0, 0, .5);
    padding: 1em;
    z-index: 100;

    & ul {
      padding-left: 0;
    }

    & button {
        position: absolute;
        right: .5em;
    }
    & img {
        width: 3.1em;
     }
  @media (min-width: 760px) {
    display: none;
  }
`;
const Links = styled.span`
  display: flex;
  gap: .5em;
  }
`;
const StyledSVG = styled.div`
  
  & img {
    border-radius: 50px;
    border: 1px #333333 solid;
    background-color: #f5f5f570;

  }
`;
const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 90%;
  right: 0;
  left: 0;
  padding: 1em;
  background: linear-gradient(180deg, #F5F5F5 11.07%, #EDEDED 100%);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: start;
  box-shadow: 0px 6px 6px 0px rgb(0, 0, 0, .3);
  ${({ isOpen }) => (isOpen ? FadeIn() : FadeOut())}

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(180deg, #333 11.07%, #2B2B2B 100%);
   }

`;
const MobileDropdown = styled.ul`
  display: flex;
  flex-direction: column;

  & li {
    margin: .3rem 0;
    font-size: 1.2rem;
  }
`;

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

    const preferredColorScheme = useColorScheme(); 
    const getToggleColor = () => {
        return preferredColorScheme === 'dark' ? 'cyan' : 'indigo';
      };
      const getLogoImage = () => {
        return preferredColorScheme === 'dark' ? LogoDark : LogoLight;
      };
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
      
    return (
        <>
        <TopNav>
            <Links>
        <Link to="/"><img src={getLogoImage()} alt="Modulo UI logo" /></Link>
        <StyledSVG>
        <a href="https://github.com/boggsyweb/modulo-ui" target='blank'>
            <img src={github} alt="github logo" />
          </a>
          </StyledSVG>
          </Links>
        <Dropdown
            trigger={
                <IconButton 
                Style="outline"
                Icon
                IconType={isOpen ? "close" : "burger"}               
                Color={getToggleColor()} 
                Size="large"
                onClick={toggleMenu}
                />   
            }>
              <DropdownContainer  isOpen={isOpen}>
            <MobileDropdown>
                <ul>
                    <li><Link to="/installation">Installation</Link></li>
                    <li><Link to="/buttons">Buttons</Link></li>
                    <li><Link to="/cards">Cards</Link></li>
                    <li><Link to="/controls">Controls</Link></li>
                    <li><Link to="/inputs">Inputs</Link></li>
                    <li><Link to="/overlay">Overlay</Link></li>
                    <li><Link to="/styling">Styling</Link></li>
                    <li><Link to="/accessibility">Accessibility</Link></li>
                    <li><Link to="/svglibrary">SVG Library</Link></li>
                </ul>
            </MobileDropdown>
            </DropdownContainer>
        </Dropdown>         
        </TopNav>
        <Outlet />
        </>
    )
}
export default MobileNav

