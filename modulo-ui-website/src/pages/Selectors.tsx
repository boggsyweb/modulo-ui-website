import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SelectorsForm from "../components/SelectorsForm";
import StyledTable from '../components/StyledTable';
import { Radio, Checkbox } from 'modulo-ui';

const SelectorsDetail = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;

    & legend {
        text-align: center;
        font-weight: 700;
        color: #7300FF;
        margin-bottom: 1em;
    }
`;
const RadioDisplay = styled.div`
    padding: 1rem 8rem;
    
    & label {
        width: 50%;
        margin: 0 auto;
        line-height: 1.2;
    }
    & button {
        margin: 1em auto 0;
    } 
    & span, fieldset {
        width: 100%;
        border-radius: 10px;
    }

`;

const Selectors = () => {
    
      const radioOptions = [
        { label: "Option 1", id: "option1", value: "1" },
        { label: "Option 2", id: "option2", value: "2" },
        { label: "Option 3", id: "option3", value: "3" },
        { label: "Option 4", id: "option4", value: "4" },
      ];
    return (
        <Layout>
          <section>
                <h2>Selectors</h2>
                <h3>Radio Buttons</h3>
                <h4>Radio buttons are used to select one option from a set. The radio button can be activated with the space bar on focus.</h4>
            <SelectorsDetail>
                <RadioDisplay>
                    <fieldset>
                        <legend>Radio Buttons</legend>
                        {radioOptions.map((option) => (
                        <Radio
                            key={option.id}
                            label={option.label}
                            name="radioGroup"
                            id={option.id}
                            value={option.value}
                        />
                        ))}
                    </fieldset>   
                </RadioDisplay>
           </SelectorsDetail>
           <SelectorsDetail>
            <RadioDisplay>
                <span>
                <legend>Large</legend>
                <Radio 
                Size="large"
                label="Radio Button"
                />
                </span>
                <span>
                <legend>Medium</legend>
                <Radio 
                label="Radio Button"
                />
                </span>
            </RadioDisplay>
                        
           </SelectorsDetail>
           <SelectorsDetail>
                <RadioDisplay>
                    <SelectorsForm/>
                </RadioDisplay>   
                <p>Add radio buttons and checkboxes, along with buttons to forms or other component to collect information.</p>
           </SelectorsDetail>
          </section>
        </Layout>
    )
}
export default Selectors