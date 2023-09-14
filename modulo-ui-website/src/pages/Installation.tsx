import styled from '@emotion/styled'
import Layout from "../components/Layout";
import {InstallNPMSnippet, InstallYarnSnippet, ImportSnippet, UsageSnippet} from "../components/CodeSnippets";



const Installation = () => {
    return (
    <>
    <Layout>
        <h1>Using Módulo UI</h1>
       <section id="installation">
        <h2>Installation</h2>
        <h4>npm</h4>    
        <InstallNPMSnippet />
        <h4>yarn</h4>
        <InstallYarnSnippet />
        <h4>Import the compent(s) you want</h4>
        <ImportSnippet />
        <h4>Usage</h4>
        <UsageSnippet />
        </section>  
    </Layout>
    </>
    )
}

export default Installation

