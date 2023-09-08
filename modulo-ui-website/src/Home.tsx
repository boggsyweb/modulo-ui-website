import styled from '@emotion/styled'
import Header from './Header';
import mockup from './assets/mockup.webp'
import colors from './assets/color-squares.webp'
import lightDark from './assets/themes.webp'


const HomeContainer  = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em;

  & h3 {
    text-align: center;
  }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: center;
    text-align: justify;
    margin: 0 auto;

    & h1 {
      font-size: 3rem;
    }
    & h2 {
      font-size: 2rem;
      filter: contrast(50%);
      margin-bottom: 2em;
    }
    & a {
      background-color: #6901FB;
      color: #F5F5F5;
      padding: 10px 18px;
      font-size: 1.2rem;
      border-radius: 5px;
      transition: .3s;

      &:hover {
        box-shadow: 3px 3px 2px rgb(0, 0, 0, .3);

      }
    }
`;


const ColorPop = styled.span`
    color: #b375ff;
`;

const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5em 8em;
    gap: 1.2em;

    & img {
      filter: drop-shadow(2px 2px 3px rgb(0, 0, 0, .3));
    }
    & p {
      font-size: 1.1rem;
    }
`;
const Home = () =>{
  return (
    <>
    <Header />
    <HomeContainer>
      <TitleWrapper>
        <h1>Welcome to Módulo UI</h1>
        <h2>Módulo UI is a <ColorPop>teeny tiny</ColorPop> but <ColorPop>versatile</ColorPop> component library that is designed to   make building your React projects <ColorPop>easy</ColorPop>.</h2>
        <a href="/documentation">Get Started</a>
      </TitleWrapper>
        <InfoWrapper>
          <span>
          <h3>
            Even though Módulo UI is teeny tiny, it has a big future.
            </h3> 
            <p>
            The most commonly needed components are available to be configured and used in numerous ways. It's un-opinionated and customisable while still easy to use. 
            </p>
            </span>
           <img src={mockup} alt="" />
          </InfoWrapper>
          <InfoWrapper>
            <img src={colors} alt="" />
            <span>
              <h3>
                Preset and custom colour themes let you make Módulo UI your own.
              </h3>
              <p>
                Módulo UI comes with a vibrant colour palette that is simple to design around but lets you customise when you need to. 
              </p>
            </span>
          </InfoWrapper>
          <InfoWrapper>
            <span>
              <h3>
                Accessibility made simple
              </h3>
              <p>
                All of the themes have been tested for accessibility. Please read more here. 
                </p>
              </span>
                <img src={lightDark} alt="" />
          </InfoWrapper>
    </HomeContainer>
    </>
  );
};


export default Home;
