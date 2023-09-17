import styled from '@emotion/styled';
import { Checkbox } from 'modulo-ui';

const SelectorsDetail = styled.div`
    display: flex;
    flex-direction: column;
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
    padding: 1rem 8rem;
    display: flex;
    justify-content: center;
    
    & label {
        margin: 0 auto;
        line-height: 1.4;
    }
 
    & span, fieldset {
        width: max-content;
        border-radius: 7px;
    }

`;
const TwoItemLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
`;

const Checkboxes = () => {
    const checkboxesData = [
        { id: 'Checkbox 1', label: 'Option 1', name: 'options', value: "1" },
        { id: 'Checkbox 2', label: 'Option 2', name: 'options', value: "2" },
        { id: 'Checkbox 3', label: 'Option 3', name: 'options', value: "3"  },
      
      ];

    return (
        <>
        <SelectorsDetail>
            <SelectorDisplay>
                <fieldset>
                    <legend>Checkboxes</legend>
                    {checkboxesData.map((checkboxData) => (
                        <Checkbox
                            value={checkboxData.value}
                            id={checkboxData.id}
                            label={checkboxData.label}
                            name={checkboxData.name}
                        />
                        ))}
                </fieldset>
            </SelectorDisplay>
            <p>Dynamically add more checkboxes to the set.</p>
        </SelectorsDetail>
        <SelectorsDetail>
            <SelectorDisplay>
                <TwoItemLayout>
                <fieldset>
                    <legend>Large</legend>
                    <Checkbox 
                    Size='large'
                    />
                </fieldset>
                <fieldset>
                    <legend>Small</legend>
                    <Checkbox 
                    />
                </fieldset>
                </TwoItemLayout>
            </SelectorDisplay>
            <p>The checkbox comes in small and large sizes.</p>
        </SelectorsDetail>

        <SelectorsDetail>
            <SelectorDisplay>
                <TwoItemLayout>
                <fieldset>
                    <legend>Solid</legend>
                    <Checkbox 
                    Style='solid'
                    />
                </fieldset>
                <fieldset>
                    <legend>Outline</legend>
                    <Checkbox 
                    />
                </fieldset>
                </TwoItemLayout>
            </SelectorDisplay>
            <p>The checkboxes can have a solid or outline style.</p>
        </SelectorsDetail>
            </>
    )
}
export default Checkboxes