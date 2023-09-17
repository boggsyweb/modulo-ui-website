import { Outlet, Link } from "react-router-dom";
import styled from '@emotion/styled';
import { Button } from "modulo-ui";
import Logo from '../assets/logo.webp'
import Dropdown from '../Dropdown';

const TopNav = styled.header`
    position: sticky;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 1px 6px 1px rgb(0, 0, 0, .2);
    padding: 1em;
    z-index: 10;

    & img {
        max-width: 3.1em;
    }

  @media (min-width: 760px) {
    display: none;
  }

`;
const MobileDropdown = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MobileNav = () => {
    return (
        <>
        <TopNav>
        <Link to="/"><img src={Logo} alt="Modulo UI logo" /></Link>
        <Dropdown
            trigger={
                <Button 
                Style="link"
                Icon
                IconType="burger"
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
                    <li><a href="#">More about Módulo</a></li>
                </ul>
            </MobileDropdown>
        </Dropdown>         
        </TopNav>
        <Outlet />
        </>
    )
}
export default MobileNav

