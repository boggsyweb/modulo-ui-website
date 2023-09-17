import styled from '@emotion/styled'
import github from '../assets/github.svg'
import ukraine from '../assets/ukraine.svg'


const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1.5em 0;

    & p {
        font-weight: bold;
    }

    & img {
        width: 2em;
    }
    & a {
        &:hover {
            opacity: .7;
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Built by <a href="https://www.sjboggs.dev/" target='blank'> Stephanie Boggs &#9426;</a></p>
            <a href="https://github.com/boggsyweb/modulo-ui" target='blank'>
                <img src={github} alt="" />
            </a>   
            <a href="https://supportukrainenow.org/" target='blank'>
                <img src={ukraine} alt="" /> 
            </a>
                
          </StyledFooter>
    )
}
export default Footer