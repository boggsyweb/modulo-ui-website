import styled from '@emotion/styled'
import github from '../assets/github.svg'
import ukraine from '../assets/ukraine.svg'
import emotion from '../assets/emotion-logo.png'


const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1.5em 0 1.5em 11.5em;
    
    @media (max-width: 760px) {
        padding: 1.5em;
      }
    & p {
        font-weight: bold;
    }

    & img {
        width: 2em;
        transition: 0.2s;
        border: 2px solid transparent;
        border-radius: 100%;

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
const LogoSpan = styled.span`
    display: flex;
    justify-content: space-evenly;
    gap: 2em;
`;
const StyledSVG = styled.div`
  width: 2.8rem;

  & img {
    border-radius: 50px;
    background-color: #f5f5f570;
    border: 1px #333333 solid;
  }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Built by <a href="https://www.sjboggs.dev/" target='blank'> Stephanie Boggs &#9426;</a></p>
            <LogoSpan>
                <StyledSVG>
            <a href="https://github.com/boggsyweb/modulo-ui" target='blank'>
                <img src={github} alt="github logo" />
            </a>   
            </StyledSVG>
            <a href="https://emotion.sh/docs/introduction" target='blank'><img src={emotion} alt="Emotion logo"/></a>
            <a href="https://supportukrainenow.org/" target='blank'>
                <img src={ukraine} alt="Ukranian flag heart" /> 
            </a>   
            </LogoSpan>             
          </StyledFooter>
    )
}
export default Footer