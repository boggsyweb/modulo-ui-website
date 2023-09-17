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
    & >p {
        text-align: center;
        font-weight: 500;
    }
`;
const SelectorDisplay = styled.div`
    padding: 1.2rem;
    // display: flex;
    
    & label {
        margin: 0 auto;
        line-height: 1.4;
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
    flex-wrap: wrap;
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
        ...selectedCheckboxes.map((checkbox) => `Checkbox ${checkbox}`),
      ];
      alert(`Your selection: ${selectedOptions.join(", ")}`);
    } else {
      alert("Please select a radio button and at least one checkbox before submitting.");
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

  return (
    <div>
      <SelectorsDetail>
        <SelectorDisplay>

            <h4>Selector Form with Button</h4>
          <FormContainer>
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
          </FormContainer>
          <Button
            Color="indigo"
            Size="medium"
            onClick={handleSubmitClick}
            Disabled={selectedRadio === null || selectedCheckboxes.length === 0}
            ButtonLabel="Submit"
          />
 
         </SelectorDisplay>   
                <p>Add radio buttons and checkboxes, along with buttons to forms or other components.</p>
      </SelectorsDetail>
    </div>
  );
};

export default RadioCheckForm;
