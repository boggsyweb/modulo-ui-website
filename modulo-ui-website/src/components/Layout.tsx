import  { ReactNode } from 'react';

import Header from "./Header";
import MobileNav from './MobileNav';
import SideNav from "./SideNav";
import Footer from './Footer';
import styled from '@emotion/styled'

type LayoutProps = {
    children: ReactNode;
}

const Main = styled.div`
    padding-left: 180px;
    display: flex;
    flex-direction: column;

    @media (max-width: 760px) {
        padding-left: 0;
      }

    & h1, h2, h3 {
        margin: 3rem 0 1rem 0;
        text-align: center;
    }
    & h4 {
        text-align: center;
        margin: 0;
    }
    & section {
        margin: 0 9em;

  @media (max-width: 760px) {
    margin: 0 1.5em;
  }
    }
    & pre {
        width: 85%;
        border-radius: 7px;
        border: 2px solid gray;
        margin: 0 auto;

        & code {
            font-size: clamp(1rem, 3.5vw, 1.2rem);
        }
    }
}
`;
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
    <>
    <Header />
    <MobileNav />
    <SideNav />
    <Main>{children}</Main>
    <Footer />
    </>
    
    )
}
export default Layout;

