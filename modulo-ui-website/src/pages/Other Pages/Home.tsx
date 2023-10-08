import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer";


import styled from '@emotion/styled'
import Header from '../../components/Header';
import mockup from '../../assets/mockup.webp'
import colors from '../../assets/color-squares.webp'
import lightDark from '../../assets/themes.webp'
import { Card } from 'modulo-ui'


const HomeContainer  = styled.main`
  padding: 2em;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: center;
    text-align: center;
    margin: 0 auto;

    & h2 {
      margin-bottom: 2em;
    }
    & a {
      background-color: #6901FB;
      color: #F5F5F5;
      padding: 10px 18px;
      font-size: 1.2rem;
      border-radius: 5px;
      transition: 0.2s;

      &:hover {
        box-shadow: 3px 4px 1px 1px rgb(0, 0, 0, .7);

      }
    }
    @media (prefers-color-scheme: dark) {
      & a {
        background-color: #01FFFF;
        color: #0C0C0C;
      }
    }
`;

const ColorPop = styled.span`
    color: #450098;

    @media (prefers-color-scheme: dark) {
      color: #C6FFFF;
     }
`;

const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(21em, 1fr));
    gap: 1em;
    margin-top: 6em;
    & p {
      font-size: clamp(1rem, 3.5vw, 1.5rem);
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
        <Link to="/installation">Get Started</Link>
      </TitleWrapper>
        <InfoWrapper>
            <Card 
                Image
                ImageSrc={mockup}
                ImageAlt='several component buttons at an angle on a white background'
                Divider
                CardStyle='shadow'
                Description=' The most commonly used components are available to be imported and configured in numerous ways. Módulo UI is un-opinionated while still easy to use.'  
              />
              <Card 
                Image
                ImageSrc={colors}
                ImageAlt='brightly colored squares'
                Divider
                CardStyle='shadow'
                Description='Módulo UI comes with a vibrant color palette that is simple to design around. If you need to customize your theme, you can do that too.'
              />
              <Card
                Image
                ImageSrc={lightDark}
                ImageAlt='an image of two cards on contrasting backgrounds'
                Divider
                CardStyle='shadow'
                Description='Accessibility was top of mind when designing Módulo UI and all of the themes have been tested for multiple use-cases.'
              />
          </InfoWrapper>
    </HomeContainer>
    <Outlet />
    <Footer />
    </>
  );
};


export default Home;
