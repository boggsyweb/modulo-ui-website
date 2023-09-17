import { Outlet, Link } from "react-router-dom";
import github from '../assets/github.svg'
import styled from '@emotion/styled'
import Logo from '../assets/logo.webp'
import {ToggleSwitch} from 'modulo-ui'

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 6px 1px rgb(0, 0, 0, .2);
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
      border: 2px solid gray;
    }
  }

`;

const StyledSVG = styled.div`
  width: 2.8rem;
  filter: invert(.5);

  & img {
    border-radius: 50px;
  }
`;


const Header = () => {
    return (
      <HeaderContainer>
        <span>
        <Link to="/"><img src={Logo} alt="Modulo UI logo" /></Link>
        <p>A <br />teeny, tiny <br />component library</p>
        </span>
        <span>
        <StyledSVG>
          <a href="https://github.com/boggsyweb/modulo-ui" target='blank'>
            <img src={github} alt="" />
          </a>
        </StyledSVG>  
        <ToggleSwitch 
        Size='small'
        />
        </span>
        <Outlet />

      </HeaderContainer>
    );
  };
  
  export default Header;