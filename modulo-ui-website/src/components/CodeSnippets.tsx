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

  export const ButtonSnippet = () => {
    const ButtonFunction = `
    import { Button } from 'modulo-ui';
    import { useState } from 'react';

    const App = () => {
      const [count, setCount] = useState(0);

      const handleButtonClick = () => {
        setCount(count + 1);
      };
      return (
        <main>
          <p>Count: {count}</p>
          <Button
            Icon
            IconType="settings1" 
            ButtonLabel="Submit"
            onClick={handleButtonClick}
          />
        </main>
      );
    };

    export default App;
    `;
    return (
      <SyntaxHighlighter children={ButtonFunction} language='typescript' style={tomorrowNightBlue} />
    )
  }

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

  export const IconSnippet = () => {
    const IconButtons = `
      import { IconButton } from 'modulo-ui';

      <IconButton 
        IconType='info'
        Style='outline'
      />
    `;
    return (
      <SyntaxHighlighter children={IconButtons} language='typescript' style={tomorrowNightBlue} />
    )
  }

  export const CardSnippet = () => {
    const CardButtonLabels = `
    import { Card } from 'modulo-ui';

    const CardLabel = ['button1', 'button2']

    ...

      <Card 
        Title='Card Component' 
        Subtitle='Add Text, Images, and Links' 
        Description='Cards are designed to have a consistent look and feel, making it easy to present data in a neat and organized manner. They are building block for creating visually appealing containers that hold and present information in a structured way.'
        CardStyle='shadow'
        Image //no image is the default
        ImageSrc='https://i.imgur.com/fmgwvlf.jpg'
        ImageAlt='photo of colorful graffitti'
        ImageCaption='Photo by Mateo Krössler on Unsplash'  //Caption is optional
        Divider //optional divider to separate the image from the rest of the card
        Buttons //Max 2 buttons can be added
        Size='small'
        ButtonLabel={CardLabel} //Add button labels in a string
    `;
    return (
      <SyntaxHighlighter children={CardButtonLabels} language='typescript' style={tomorrowNightBlue} />
    )
  }
  export const ToggleSnippet = () => {
    const ToggleThemeSwitch =`
      import { ToggleSwitch } from 'modulo-ui';
      import { useState } from 'react';

      ...

      const ThemeSwitch: React.FC = () => {
        const [demoTheme, setDemoTheme] = useState(false);
      
        const themeDemo = () => {
          setDemoTheme((prevDemoTheme) => !prevDemoTheme);
        };
      
        const themeStyle = {
          backgroundColor: demoTheme ? '#F400DC' : 'inherit',
        };
      
        return (
          <ThemeDiv theme={themeStyle}>
            <ToggleSwitch
              OutsideText
              OutsideLeft=""
              OutsideRight="Click Me"
              onChange={themeDemo}
            />
          </ThemeDiv>
        );
      };
    `;
    return (
      <SyntaxHighlighter children={ToggleThemeSwitch} language='typescript' style={tomorrowNightBlue}/> 
    )
  }

  export const ToggleTextSnippet = () => {
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
export const ButtonStyleSnippet = () => {
  const ButtonStyles =`
   button {
    transition: 0.2s;

    &:hover {
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
    }
  }
   button {
    &:hover {
        outline: lawngreen solid 3px;
        color: lawngreen;
      }
  }

  }
   button {
      background-color: lawngreen;
      color: darkgreen;
  }
  `;
  return (
    <SyntaxHighlighter  children={ButtonStyles} language='css' style={tomorrowNightBlue}/>
    )
}
export const ToggleStyleSnippet = () => {
  const ToggleStyles =`
  input:checked + span::before {
    background-color: mediumvioletred;
    }
    & span {
        background-color: mediumturquoise;
        &:hover {
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
                }
      &::before {
      background-color: mediumvioletred;
      }
}
  `;
  return <SyntaxHighlighter  children={ToggleStyles} language='css' style={tomorrowNightBlue}/>
}

