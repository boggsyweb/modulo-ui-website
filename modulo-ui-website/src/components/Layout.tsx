import  { ReactNode } from 'react';

import Header from "./Header";
import SideNav from "./SideNav";
import styled from '@emotion/styled'

type LayoutProps = {
    children: ReactNode;

}

const Main = styled.div`
    padding-left: 180px;
    display: flex;
    flex-direction: column;


    & h1, h2, h3 {
        margin: 4rem 0 1rem 0;
        text-align: center;
    }
    & h4 {
        text-align: center;
        margin: 0;
    }
    & section {
        width: 65%;
        margin: 0 auto;
    }
    & pre {
        width: 75%;
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
    <SideNav />
    <Main>{children}</Main>

    </>
    )
}
export default Layout;

