import { useState } from 'react';

const useCopyToClipboard = () => {
  const [copyStatus, setCopyStatus] = useState('Copy');

  const copyToClipboard = (text: string) => {
    return () => {
      navigator.clipboard.writeText(text).then(() => {
        setCopyStatus('✅');
        setTimeout(() => {
          setCopyStatus('Copy');
        }, 1500); 
      });
    };
  };

  return { copyToClipboard, copyStatus };
};

export default useCopyToClipboard;
