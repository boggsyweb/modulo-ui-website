// CodeSnippets.js
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const InstallSnippet = () => {
  const installCode = `
    npm i modulo-ui
  `;

  return (
    <SyntaxHighlighter children={installCode} language="typescript" style={nightOwl } />

  );
};

export const ImportSnippet = () => {
  const importCode = `
    import { Button } from 'modulo-ui'
  `;

  return (
    <SyntaxHighlighter children={importCode} language="typescript" style={nightOwl } />

  );
};

export const UsageSnippet = () => {
    const usageCode = `
      import React from 'react';
      import { Button } from 'modulo-ui'

      const App = () => (
        <>
        <Button 
        Size='large' 
        Color='red'
        Icon 
        IconType='settings1' 
        ButtonLabel="Submit" 
        onClick={handleButtonClick} 
        />
        </>
      );
    `;
  
    return (
      <SyntaxHighlighter children={usageCode} language="typescript" style={nightOwl } />
  
    );
  };
