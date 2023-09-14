import React, { useState } from 'react'
 import { CopyToClipboard } from 'react-copy-to-clipboard'
 import { IoIosCopy, IoIosCheckmarkCircleOutline } from 'react-icons/io'
import styled from '@emotion/styled'

const SnippetContainer = styled.div`
    display: grid;
`;

const CopyButton = styled.button`
    justify-self: end;
    align-self: start;
`;

const CodeCopy = () => {
    return (
        <SnippetContainer>
            <CopyButton></CopyButton>
            <CopyToClipboard text={code}></CopyToClipboard>
            
        </SnippetContainer>
       
    )
}
export default CodeCopy