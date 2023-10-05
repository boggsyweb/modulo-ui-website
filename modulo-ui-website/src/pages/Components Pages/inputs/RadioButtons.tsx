import styled from '@emotion/styled';
import { Radio } from 'modulo-ui';
import useColorScheme from '../../../hooks/theme-colors';
import { RadioBasicSnippet, RadioSizeSnippet } from '../../../components/CodeSnippets';


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
        margin-bottom: .3em;
    }
    & p {
        text-align: center;
        font-weight: 500;
    }
`;
const SelectorDisplay = styled.div`
    padding: 1.2em;
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
    & input {
        transition: 0.2s;
    }
`;
const TwoItemLayout = styled.div`
    display: flex;
    gap: 1em;
`;

const RadioButtons = () => {
    const preferredColorScheme = useColorScheme(); 

    const radioOptions = [
        { label: "Radio 1", id: "option1", value: "1" },
        { label: "Radio 2", id: "option2", value: "2" },
        { label: "Radio 3", id: "option3", value: "3" },
        { label: "Radio 4", id: "option4", value: "4" },
      ];
      const getInputColor = () => {
        return preferredColorScheme === 'dark' ? 'cyan' : 'indigo';
      };
    return (
        <>
        <SelectorsDetail>
                <SelectorDisplay>
                    <fieldset>
                        <legend>Radio Buttons</legend>
                        {radioOptions.map((option) => (
                        <Radio
                            label={option.label}
                            name="radioGroup"
                            id={option.id}
                            value={option.value}
                            key={option.id}
                            Color={getInputColor()} 
                        />
                        ))}
                    </fieldset>   
                </SelectorDisplay>
                <p>Dynamically add more radio buttons to the set.</p>
                <RadioBasicSnippet />
           </SelectorsDetail>
            <SelectorsDetail>
            <SelectorDisplay>
                <TwoItemLayout>
                <fieldset>
                    <legend>Large</legend>
                    <Radio 
                    Size="large"
                    Color={getInputColor()} 
                />
                </fieldset>
                <fieldset>
                    <legend>Small</legend>
                    <Radio 
                    Color={getInputColor()} 
                    />
                </fieldset>
                </TwoItemLayout>
        </SelectorDisplay>
        <p>The radio button comes in small and large sizes.</p>
        <RadioSizeSnippet />
       </SelectorsDetail>
       </>
    )
}
export default RadioButtons