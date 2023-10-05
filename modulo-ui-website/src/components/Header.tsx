import { Outlet, Link } from "react-router-dom";
import github from '../assets/github.svg'
import styled from '@emotion/styled'
import LogoLight from '../assets/logo-indigo.webp'
import LogoDark from '../assets/logo-cyan.webp'
import useColorScheme from "../hooks/theme-colors";

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 6px 1px rgb(0, 0, 0, .5);
  padding: 1em;
  z-index: 10;
  
  @media (max-width: 760px) {
    display: none;
  }

  & span {
    display: flex;
    gap: 1em;
    align-items: center;

    & p {
      margin: 0;
    }
  }
  & img {
    max-width: 3.1em;
    transition:  .2s;
    border: 2px solid transparent;

    &:hover {
      box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.5);
    }
  }
  @media (prefers-color-scheme: dark) {
      & img {
        &:hover {
          box-shadow: 0 0 6px 3px rgb(255, 255, 255, 0.5);
        }
      }
  }
    `;

const StyledSVG = styled.div`
  width: 2.8rem;  
  
  & img {
    border-radius: 50px;
    border: 1px #333333 solid;
    background-color: #f5f5f570;

  }
`;


const Header = () => {
  const preferredColorScheme = useColorScheme(); 
  const getLogoImage = () => {
    return preferredColorScheme === 'dark' ? LogoDark : LogoLight;
  };
    return (
      <HeaderContainer>
        <span>
        <Link to="/">< img src={getLogoImage()} alt="Modulo UI logo"/></Link>
        <p>A <br />teeny, tiny <br />component library</p>
        </span>
        <span>
        <StyledSVG>
          <a href="https://github.com/boggsyweb/modulo-ui" target='blank'>
            <img src={github} alt="github logo" />
          </a>
        </StyledSVG>  
        </span>
        <Outlet />

      </HeaderContainer>
    );
  };
  
  export default Header;