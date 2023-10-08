import Layout from "../../components/Layout";
import {InstallNPMSnippet, InstallYarnSnippet, ImportSnippet, UsageSnippet} from "../../components/CodeSnippets";
import styled from '@emotion/styled'

const CopyDiv = styled.div`
   position: relative;

   & button {
    position: absolute;
    top: 5%;
    right: 10%;
    border: none;
    border-radius: 2px;
    width: 3rem;
    background: none;
    color: #F5F5F5;
    font-weight: bold;
   }    
`;
const Installation = () => {
    return (
    <>
    <Layout>
        <h1>Using Módulo UI</h1>
       <section id="installation">
        <h2>Installation</h2>
        <h3>npm</h3>  
        <CopyDiv>  
          <InstallNPMSnippet />
        </CopyDiv>
        <h3>yarn</h3>
        <CopyDiv>
            <InstallYarnSnippet />
        </CopyDiv>
        <h3>Import the compent(s) you want</h3>
        <ImportSnippet />
        <h3>Usage</h3>
        <UsageSnippet />
        </section>  
    </Layout>
    </>
    )
}

export default Installation

