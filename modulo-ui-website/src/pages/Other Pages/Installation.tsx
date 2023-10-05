import Layout from "../../components/Layout";
import {InstallNPMSnippet, InstallYarnSnippet, ImportSnippet, UsageSnippet} from "../../components/CodeSnippets";



const Installation = () => {
    return (
    <>
    <Layout>
        <h1>Using Módulo UI</h1>
       <section id="installation">
        <h2>Installation</h2>
        <h3>npm</h3>    
        <InstallNPMSnippet />
        <h3>yarn</h3>
        <InstallYarnSnippet />
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

