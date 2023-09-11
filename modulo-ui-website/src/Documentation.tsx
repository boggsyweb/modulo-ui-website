import Header from "./Header"
import SideNav from "./SideNav"
import styled from '@emotion/styled'
import {InstallSnippet, ImportSnippet, UsageSnippet} from "./CodeSnippets";



const Main = styled.div`
    padding-left: 180px;
    display: flex;
    flex-direction: column;

    & h1 {
        margin-top: 1em;
        text-align: center;
    }
    & span {
        width: 600px;
        margin: 0 auto;

        & h3 {
            margin-bottom: 0;
}

        & pre {
            border-radius: 7px;
            border: 2px solid gray;
            margin-top: 0;

            & code {
                font-size: 1.2rem;
            }
        }
    }
    
`;

const Documentation = () => {
    return (
    <>
    <Header />
    <SideNav />
    <Main>
       <span>
        <h1>Installation</h1>
        <h3>npm</h3>    
        <InstallSnippet />
        <h3>Import the compent(s) you want</h3>
        <ImportSnippet />
        <h3>Usage</h3>
        <UsageSnippet />
        </span>
       
    </Main>


    </>
    )
}

export default Documentation

