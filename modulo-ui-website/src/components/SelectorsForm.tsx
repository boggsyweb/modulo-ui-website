import { useState } from "react";
import { Radio, Button, Checkbox } from "modulo-ui";
import styled from '@emotion/styled'

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
`;

const SelectorsForm: React.FC = () => {
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
      <FormContainer>
        <span>
      <legend>Please Select One Option</legend>
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
    <legend>Please Select all that Apply</legend>
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
    </div>
  );
};

export default SelectorsForm;
