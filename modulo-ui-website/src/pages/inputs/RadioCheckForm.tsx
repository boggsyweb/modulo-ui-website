import { useState } from "react";
import { Radio, Button, Checkbox } from "modulo-ui";
import styled from '@emotion/styled'

const SelectorsDetail = styled.div`
    display: grid;
    justify-items: center;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;

    & legend {
        text-align: center;
        font-weight: 700;
        color: #7300FF;
        margin-bottom: .3em;
    }
    & p {
        text-align: center;
        font-weight: 500;
    }
`;
const SelectorDisplay = styled.div`
    padding: 1rem 8rem;
    display: flex;
    
    & label {
        margin: 0 auto;
        line-height: 1.2;
    }
    & button {
        margin: 1em auto 0;
    } 
    & span, fieldset {
        width: max-content;
        border-radius: 7px;
    }

`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
`;

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
        `Radio ${selectedRadio}`,
        ...selectedCheckboxes.map((checkbox) => ` ${checkbox}`),
      ];
      alert(`Your selection: ${selectedOptions.join(", ")}`);
    } else {
      alert("Please select a radio button and at least one checkbox before submitting.");
    }
  };

  const radioOptions = [
    { label: "Option 1", id: "option1", value: "1" },
    { label: "Option 2", id: "option2", value: "2" },
    { label: "Option 3", id: "option3", value: "3" },
  ];

  const checkboxesOptions = [
    { id: "Checkbox 1", label: "Option 1", name: "options", checked: true },
    { id: "Checkbox 2", label: "Option 2", name: "options", checked: false },
    { id: "Checkbox 3", label: "Option 3", name: "options", checked: false },
  ];

  return (
    <div>
      <SelectorsDetail>
        <SelectorDisplay>
          <fieldset>
            <legend>Selector Form with Button</legend>
          <FormContainer>
            <span>
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
          </span>
          <span>
        <legend>Select More than One Option</legend>
          {checkboxesOptions.map((checkboxOptions) => (
            <Checkbox
              key={checkboxOptions.id}
              id={checkboxOptions.id}
              label={checkboxOptions.label}
              name={checkboxOptions.name}
              onChange={() => handleCheckboxChange(checkboxOptions.id)}
            />
          ))}
          </span>
          </FormContainer>
          <Button
            Color="indigo"
            Size="medium"
            onClick={handleSubmitClick}
            Disabled={selectedRadio === null || selectedCheckboxes.length === 0}
            ButtonLabel="Submit"
          />
          </fieldset>
         </SelectorDisplay>   
                <p>Add radio buttons and checkboxes, along with buttons to forms or other components.</p>
      </SelectorsDetail>
    </div>
  );
};

export default RadioCheckForm;
