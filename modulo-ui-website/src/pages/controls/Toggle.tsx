import styled from '@emotion/styled'
import { ToggleSwitch } from 'modulo-ui'
import { ToggleSnippet } from '../../components/CodeSnippets';

const ToggleDetail = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;

    & p {
        text-align: center;
        font-weight: 500;
    }
`;
const ToggleDisplay = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1.5em 0;
`;
const TwoItemLayout = styled.div`
    display: flex;
    gap: 2em;

    & fieldset {
        border-radius: 7px
    }
`;

const Toggle = () => {
    return (
        <>
        <ToggleDetail>
            <ToggleDisplay>
                <TwoItemLayout>
                    <ToggleSwitch />
                    <ToggleSwitch 
                        Size='large'/>
                    </TwoItemLayout>
            </ToggleDisplay>
                <p>Toggle switches come in small and large sizes.</p>
        </ToggleDetail>

        <ToggleDetail>
            <ToggleDisplay>
                <TwoItemLayout>
                    <ToggleSwitch />
                    <ToggleSwitch 
                        Style='rectangle'/>
                    </TwoItemLayout>
            </ToggleDisplay>
                <p>Oval and rectangle styles are available.</p>
        </ToggleDetail>

        <ToggleDetail>
            <ToggleDisplay>
                <TwoItemLayout>
                    <fieldset>
                        <ToggleSwitch 
                            OutsideText
                        />
                    </fieldset>
                    <fieldset>
                        <ToggleSwitch 
                            OutsideText
                            OutsideLeft=''
                            OutsideRight='I agree'
                        />
                    </fieldset>
                    </TwoItemLayout>
            </ToggleDisplay>
                <p>Add labels to either side or both sides, depending on your needs.</p>
                <ToggleSnippet />
        </ToggleDetail>
    </>
    )
}
export default Toggle