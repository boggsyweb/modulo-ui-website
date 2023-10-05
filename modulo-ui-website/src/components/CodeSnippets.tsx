import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);


export const InstallNPMSnippet = () => {
  const installNPM = `
    $ npm i modulo-ui
  `;
  return (
    <SyntaxHighlighter children={installNPM}language="javascript" style={tomorrowNightBlue } />

  );
};

export const InstallYarnSnippet = () => {
  const installYarn = `
    $ yarn add modulo-ui
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
    <>
      <p>Count: {count}</p>
      <Button
        Icon
        IconType="settings1" 
        ButtonLabel="Submit"
        onClick={handleButtonClick}
      />
    </>
  );
};
    `;
    return (
      <SyntaxHighlighter children={ButtonFunction} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const ButtonSizeSnippet = () => {
    const ButtonSize =`
import { Button } from 'modulo-ui';

<>
  <Button Size='small'/>
  <Button /> //medium is the default Size
  <Button Size='large'/>
</>
    `;
    return (
      <SyntaxHighlighter children={ButtonSize} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const ButtonStyleDemoSnippet = () => {
    const ButtonStyleDemo =`
import { Button } from 'modulo-ui';

<>
  <Button /> //solid is the default Style
  <Button Style='outline'/>
  <Button Size='ghostHover'/>
  <Button Size='link'/>
</>
    `;
    return (
      <SyntaxHighlighter children={ButtonStyleDemo} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const ButtonOvalSnippet = () => {
    const ButtonOval =`
import { Button } from 'modulo-ui';

<>
  <Button Oval /> //the Oval prop is applied as a boolean
  <Button /> //the default style is a rectangle
</>
    `;
    return (
      <SyntaxHighlighter children={ButtonOval} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const ButtonIconSnippet = () => {
    const ButtonIcon =`
import { Button } from 'modulo-ui';

<>
  <Button Icon /> //left is the default IconPosition and search is the default IconType
  <Button Icon IconType='mail' IconPosition='right'/> 
</>
    `;
    return (
      <SyntaxHighlighter children={ButtonIcon} language='typescript' style={tomorrowNightBlue} />
    )
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

  export const IconSnippet = () => {
    const IconButtons = `
import { IconButton } from 'modulo-ui';

<>
  <IconButton IconType='info' /> //solid is the default Style
  <IconButton IconType='settings2' Style='outline' />
  <IconButton IconType='heart' Style='ghostHover' />
</>
    `;
    return (
      <SyntaxHighlighter children={IconButtons} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const CardSnippet = () => {
    const CardButtonLabels = `
import { Card } from 'modulo-ui';

const CardLabel = ['button1', 'button2'];


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
  ButtonLabel={CardLabel} //Add button labels as a string
/>
    `;
    return (
      <SyntaxHighlighter children={CardButtonLabels} language='typescript' style={tomorrowNightBlue} />
    )
  };
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
  };

  export const ToggleSizeSnippet = () => {
    const ToggleSize =`
import { ToggleSwitch } from 'modulo-ui';

<>
  <ToggleSwitch /> //small is the default Size
  <ToggleSwitch  Size='large'/>
</>
    `;
    return <SyntaxHighlighter  children={ToggleSize} language='typescript' style={tomorrowNightBlue}/>
  };

  export const ToggleStyleDemoSnippet = () => {
    const ToggleStyle =`
import { ToggleSwitch } from 'modulo-ui';

<>
  <ToggleSwitch /> //oval is the default Style
  <ToggleSwitch  Style='rectangle'/>
</>
    `;
    return <SyntaxHighlighter  children={ToggleStyle} language='typescript' style={tomorrowNightBlue}/>
  };
  
  export const ToggleTextSnippet = () => {
    const ToggleLabels =`
import { ToggleSwitch } from 'modulo-ui';

<>
  <ToggleSwitch 
    OutsideText
  />
  //The OutsideText prop's default is 'on' and 'off'

  <ToggleSwitch 
    OutsideText
    OutsideLeft='left' 
    OutsideRight='right' 
  />
  //overwrite the default by passing the OutsideLeft and OutsideRight props and adding whatever text you want.

  <ToggleSwitch 
    OutsideText
    OutsideLeft='' 
    OutsideRight='I agree' 
  />
  //add text to only one side by leaving one string blank
</>
    `;
    return (
      <SyntaxHighlighter children={ToggleLabels} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const RangeSizeSnippet = () => {
    const RangeSize = `
import { Range } from 'modulo-ui';

<>
  <Range /> //small is the default Size
  <Range Size='large'/>
</>
    `;
    return (
      <SyntaxHighlighter children={RangeSize} language='typescript' style={tomorrowNightBlue} />
    )
  };
  export const RangeSnippet = () => {
    const RangeVolume =`
import { Range } from 'modulo-ui';

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
  };
  export const RadioBasicSnippet = () => {
    const RadioBasic =`
import { Radio } from 'modulo-ui';

const radioOptions = [
  { label: "Radio 1", id: "option1", value: "1" },
  { label: "Radio 2", id: "option2", value: "2" },
  { label: "Radio 3", id: "option3", value: "3" },
  { label: "Radio 4", id: "option4", value: "4" },
];

return (
  <>
    <fieldset>
      <legend>Radio Buttons</legend>
      {radioOptions.map((option) => (
      <Radio
          label={option.label}
          name="radioGroup"
          id={option.id}
          value={option.value}
          key={option.id}
      />
      ))}
    </fieldset>   
    </>
)
    `;
    return (
      <SyntaxHighlighter children={RadioBasic} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const RadioSizeSnippet = () => {
    const RadioSize =`
import { Radio } from 'modulo-ui';

<>
  <Radio Size="large" />
  <Radio /> //small is the default Size
</>
    `;
    return (
      <SyntaxHighlighter children={RadioSize} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const CheckboxBasicSnippet = () => {
    const CheckboxBasic =`
import { Checkbox } from 'modulo-ui';

const checkboxesData = [
{ id: 'Checkbox 1', label: 'Option 1', name: 'options', value: "1" },
{ id: 'Checkbox 2', label: 'Option 2', name: 'options', value: "2" },
{ id: 'Checkbox 3', label: 'Option 3', name: 'options', value: "3"  },
];
return (
<>
  <fieldset>
      <legend>Checkboxes</legend>
      {checkboxesData.map((checkboxData) => (
          <Checkbox
              value={checkboxData.value}
              id={checkboxData.id}
              label={checkboxData.label}
              name={checkboxData.name}
              key={checkboxData.id}
          />
          ))}
  </fieldset>
</>
    )
    `;
    return (
      <SyntaxHighlighter children={CheckboxBasic} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const CheckboxSizeSnippet = () => {
    const CheckboxSize =`
import { Checkbox } from 'modulo-ui';

<>
  <Checkbox Size="large" />
  <Checkbox /> //small is the default Size
</>
    `;
    return (
      <SyntaxHighlighter children={CheckboxSize} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const CheckboxStyleSnippet = () => {
    const CheckboxStyle =`
import { Checkbox } from 'modulo-ui';

<>
  <Checkbox Style="solid" />
  <Checkbox /> //outline is the default Style
</>
    `;
    return (
      <SyntaxHighlighter children={CheckboxStyle} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const CheckRadioSnippet = () => {
    const CheckRadio =`
import { useState } from "react";
import { Radio, Checkbox, Button } from 'modulo-ui';

const RadioCheckForm: React.FC = () => {
const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
const [selectedCheckboxes, setSelectCheckboxes] = useState<string[]>([]);

const handleRadioChange = (radioValue: string) => {
setSelectedRadio(radioValue);
};

const handleCheckboxChange = (checkboxValue: string) => {
setSelectCheckboxes((prevSelected) =>
  prevSelected.includes(checkboxValue)
    ? prevSelected.filter((item) => item !== checkboxValue)
    : [...prevSelected, checkboxValue]
);
};

const handleSubmitClick = () => {
if (selectedRadio !== null && selectedCheckboxes.length > 0) {
  const selectedOptions = [
    &grave;Radio &amp;{selectedRadio}&grave;,
    ...selectedCheckboxes.map((checkbox) => &grave;Checkbox &amp;checkbox}&grave;),
  ];
  alert(&grave;Your selection: &amp;{selectedOptions.join(", ")}&grave;);
  }
};

const radioOptions = [
{ label: "Radio 1", id: "radio1", value: "1" },
{ label: "Radio 2", id: "radio2", value: "2" },
{ label: "Radio 3", id: "radio3", value: "3" },
];

const checkboxesOptions = [
{ label: "Checkbox 1", id: "checkbox1",  value: "1", name: "checkbox1" },
{ label: "Checkbox 2", id: "checkbox2",  value: "2", name: "checkbox2" },
{ label: "Checkbox 3", id: "checkbox3",  value: "3", name: "checkbox3" },
];

...

return (
<>
  <fieldset>
      <legend>Select Only One Option</legend>
      {radioOptions.map((option) => (
        <Radio
          key={option.id}
          label={option.label}
          name="radioGroup"
          id={option.id}
          value={option.value}
          onChange={() => handleRadioChange(option.value)}
        />
      ))}
  </fieldset>
  <fieldset>
        <legend>Select More than One Option</legend>
          {checkboxesOptions.map((checkboxOptions) => (
            <Checkbox
              key={checkboxOptions.id}
              value={checkboxOptions.value}
              id={checkboxOptions.id}
              label={checkboxOptions.label}
              name={checkboxOptions.name}
              onChange={() => handleCheckboxChange(checkboxOptions.value)}
            />
          ))}
    </fieldset>

    ...
    
    <Button
      Size="medium"
      onClick={handleSubmitClick}
      Disabled={selectedRadio === null || selectedCheckboxes.length === 0}
      ButtonLabel="Submit"
    />
  </>
  )
    `;
    return (
      <SyntaxHighlighter children={CheckRadio} language='typescript' style={tomorrowNightBlue} />
    )
  };

  export const ModalSnippet = () => {
    const ModalBasic =`
import { Modal } from 'modulo-ui'

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
  outline: lawngreen solid 3px;
  color: lawngreen;     
}

button {
  background-color: lawngreen;
  color: darkgreen;
}

button {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  color: lawngreen;
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
  return (
  <SyntaxHighlighter  children={ToggleStyles} language='css' style={tomorrowNightBlue}/>
  )
}
export const RangeStyleSnippet = () => {
  const RangeStyles =`
input {
  background-color: mediumturquoise;
  
  &::-webkit-slider-thumb {
      background: lawngreen;
      border: darkgreen 2px solid;
  }
  &::-moz-range-thumb {
      background: lawngreen;
      border: darkgreen 2px solid;
  }
  &:focus::-webkit-slider-thumb {
      outline: max(2px, 0.2em) solid darkgreen;
      outline-offset: max(2px, 0.15em);
  }
  &:focus::-moz-range-thumb {
      outline: max(2px, 0.2em) solid darkgreen;
      outline-offset: max(2px, 0.15em);
  }
}
  `;
  return (
    <SyntaxHighlighter children={RangeStyles} language='CSS' style={tomorrowNightBlue}/>
  )
}

