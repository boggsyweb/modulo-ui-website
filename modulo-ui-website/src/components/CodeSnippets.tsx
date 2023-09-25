import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);


export const InstallNPMSnippet = () => {
  const installNPM = `
    npm i modulo-ui
  `;
  return (
    <SyntaxHighlighter children={installNPM}language="javascript" style={tomorrowNightBlue } />

  );
};

export const InstallYarnSnippet = () => {
  const installYarn = `
    yarn add modulo-ui
  `;
  return (
    <SyntaxHighlighter children={installYarn}language="typescript" style={tomorrowNightBlue } />

  );
};

export const ImportSnippet = () => {
  const importCode = `
    import { Button } from 'modulo-ui';
  `;

  return (
    <SyntaxHighlighter children={importCode} language="typescript" style={tomorrowNightBlue } />

  );
};

export const UsageSnippet = () => {
    const usageCode = `
      import React from 'react';
      import { Button } from 'modulo-ui';

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
      <SyntaxHighlighter children={usageCode} language="typescript" style={tomorrowNightBlue } />
  
    );
  };

  export const ButtonGroupSnippet = () => {
    const buttonGroupLabels = `
    import { ButtonGroup } from 'modulo-ui';

      function App() {
        const buttonLabels = ['Button 1', 'Button 2', 'Button 3']

        return (
           <>
            <ButtonGroup 
            GroupLabel={buttonLabels}
            />
          </>
        )
        }
    `;
    return (
      <SyntaxHighlighter children={buttonGroupLabels} language='typescript' style={tomorrowNightBlue} />
    )
  }
  export const CardButtonSnippet = () => {
    const CardButtonLabels = `
    import { Card } from 'modulo-ui';

      function App() {
        const cardButtons = ['Button 1', 'Button 2']

        return (
           <>
            <Card
            Buttons
            ButtonLabel={cardButtons}
            />
          </>
        )
        }
    `;
    return (
      <SyntaxHighlighter children={CardButtonLabels} language='typescript' style={tomorrowNightBlue} />
    )
  }

  export const ToggleSnippet = () => {
    const ToggleLabels =`
    <ToggleSwitch 
      OutsideText
    />
    //The OutsideText prop's default is 'on' and 'off'

    <ToggleSwitch 
      OutsideText
      OutsideLeft='left' 
      OutsideRight='right' 
    />
    //override the default by passing the OutsideLeft and OutsideRight props

    <ToggleSwitch 
      OutsideText
      OutsideLeft='' 
      OutsideRight='I agree' 
    />
    //add text to only one side by leaving one string blank

    `;
    return (
      <SyntaxHighlighter children={ToggleLabels} language='typescript' style={tomorrowNightBlue} />
    )
  }

  export const RangeSnippet = () => {
    const RangeVolume =`

  function RangeVolume() {
    const [sliderValue, setSliderValue] = useState(11);

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
         setSliderValue(event.target.valueAsNumber);
      };

        return (
        <label htmlFor="rangeValue">Volume</label>
        <Range
            min={0}
            max={11}
            step={1}
            value={sliderValue}
            onChange={handleChange}
            id='rangeValue'
            name='rangeValue'
        />
        <p>{sliderValue}</p>
        )
    }
    `;
    return (
      <SyntaxHighlighter children={RangeVolume} language='typescript' style={tomorrowNightBlue} />
    )
  }

  export const ModalSnippet = () => {
    const ModalBasic =`

  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
    
  const handleCloseButton = () => {closeModal()};
  
  useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'; 
      } else {
        document.body.style.overflow = 'auto'; 
      }
    }, [isOpen]);
  
    return (
        <ModalDisplay>
        <Button 
        ButtonLabel='Open'
        onClick={openModal}
        />
        <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalInner1>
                <IconButton IconType="close" onClick={handleCloseButton} />
                <h2>Hello! This is a basic modal.</h2>
                <p>Click the button or outside of the modal to close.</p> 
            </ModalInner1>
        </Modal>
        </ModalDisplay>
    )
}
    `;
    return (
      <SyntaxHighlighter children={ModalBasic} language='typescript' style={tomorrowNightBlue} />
    )
  }

