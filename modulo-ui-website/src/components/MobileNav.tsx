import { Outlet, Link } from "react-router-dom";
import styled from '@emotion/styled';
import { Button } from "modulo-ui";
import useColorScheme from "../hooks/theme-colors";
import LogoLight from '../assets/logo-indigo.webp'
import LogoDark from '../assets/logo-cyan.webp'
import Dropdown from '../hooks/dropdown';
import github from '../assets/github.svg'

const TopNav = styled.header`
    position: sticky;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 1px 6px 1px rgb(0, 0, 0, .5);
    padding: 1em;
    z-index: 10;

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
const MobileDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 3.5em;

  & li {
    margin-top: .3rem;
  }
`;
const Links = styled.span`
  display: flex;
  gap: .5em;
  }
`;
const MobileNav = () => {
    const preferredColorScheme = useColorScheme(); 
    const getToggleColor = () => {
        return preferredColorScheme === 'dark' ? 'cyan' : 'indigo';
      };
      const getLogoImage = () => {
        return preferredColorScheme === 'dark' ? LogoDark : LogoLight;
      };
    return (
        <>
        <TopNav>
            <Links>
        <Link to="/"><img src={getLogoImage()} alt="Modulo UI logo" /></Link>
        <a href="https://github.com/boggsyweb/modulo-ui" target='blank'>
            <img src={github} alt="github logo" />
          </a>
          </Links>
        <Dropdown
            trigger={
                <Button 
                Style="link"
                Icon
                IconType="burger"
                Color={getToggleColor()} 
                />   
            }>
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
                </ul>
            </MobileDropdown>
        </Dropdown>         
        </TopNav>
        <Outlet />
        </>
    )
}
export default MobileNav

