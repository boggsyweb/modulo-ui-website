import styled from '@emotion/styled'
import { ToggleSwitch } from 'modulo-ui'
import { ToggleTextSnippet, ToggleSnippet, ToggleSizeSnippet, ToggleStyleDemoSnippet } from '../../../components/CodeSnippets';
import ThemeSwitch from './ThemeSwitch';
import useColorScheme from '../../../hooks/theme-colors';


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
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;

    & fieldset {
        border-radius: 7px
    }
`;

const Toggle = () => {
    const preferredColorScheme = useColorScheme(); 
    const getControlColor = () => {
        return preferredColorScheme === 'dark' ? 'cyan' : 'indigo';
      };
    return (
        <>
        <ToggleDetail>
            <ToggleDisplay>
                <ThemeSwitch />
            </ToggleDisplay>
            <ToggleSnippet />
        </ToggleDetail>
        <ToggleDetail>
            <ToggleDisplay>
                <TwoItemLayout>
                    <ToggleSwitch 
                    Color={getControlColor()} 
                    />
                    <ToggleSwitch 
                        Size='large'
                        Color={getControlColor()} 
                        />
                    </TwoItemLayout>
            </ToggleDisplay>
                <p>Toggle switches come in small and large sizes.</p>
                <ToggleSizeSnippet />
        </ToggleDetail>

        <ToggleDetail>
            <ToggleDisplay>
                <TwoItemLayout>
                    <ToggleSwitch 
                    Color={getControlColor()} 
                    />
                    <ToggleSwitch 
                        Style='rectangle'
                        Color={getControlColor()} 
                        />
                    </TwoItemLayout>
            </ToggleDisplay>
                <p>Oval and rectangle styles are available.</p>
                <ToggleStyleDemoSnippet />
        </ToggleDetail>

        <ToggleDetail>
            <ToggleDisplay>
                <TwoItemLayout>
                    <fieldset>
                        <ToggleSwitch 
                            OutsideText
                            Color={getControlColor()} 
                        />
                    </fieldset>
                    <fieldset>
                        <ToggleSwitch 
                            OutsideText
                            OutsideLeft=''
                            OutsideRight='I agree'
                            Color={getControlColor()} 
                        />
                    </fieldset>
                    </TwoItemLayout>
            </ToggleDisplay>
                <p>Add labels to either side or both sides, depending on your needs.</p>
                <ToggleTextSnippet />
        </ToggleDetail>
    </>
    )
}
export default Toggle