// To do: Code snippets for all props demonstrated
import useColorScheme from '../../hooks/theme-colors';
import { useState } from 'react';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import StyledTable from '../../styles/StyledTable';
import { Button, ButtonGroup, IconButton } from 'modulo-ui';
import { ButtonSnippet, ButtonGroupSnippet, IconSnippet, ButtonSizeSnippet, ButtonStyleDemoSnippet, ButtonOvalSnippet, ButtonIconSnippet } from '../../components/CodeSnippets';


const ButtonDetail = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;

    & p {
        text-align: center;
        font-weight: 500;
    }
`;

const ButtonDisplay = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1.5em 0;
    flex-wrap: wrap;
`;

const Buttons = () => {
    const [count, setCount] = useState(0);
    const preferredColorScheme = useColorScheme(); 

    const handleButtonClick = () => {
    setCount(count + 1);
  };
  const getButtonColor = () => {
    return preferredColorScheme === 'dark' ? 'cyan' : 'indigo';
  };

    const buttonLabels = ['BUTTON 1', 'BUTTON 2', 'BUTTON 3']
    const buttonLabelsTwo = ['BUTTON 1', 'BUTTON 2', 'BUTTON 3', 'BUTTON 4']

    return (
        <Layout>
            <section>
            <h2>Buttons</h2>
            <h3>
                The button is used to trigger events and actions. It has a range of styles that can be used for different purposes. 
            </h3>
            <ButtonDetail>
                <ButtonDisplay>
                    <Button 
                    Icon
                    IconType="settings1"
                    ButtonLabel="Submit"
                    Color={getButtonColor()} 
                    onClick={handleButtonClick}
                    />
                    <p>Count: {count}</p>
                </ButtonDisplay>
                <ButtonSnippet />
            </ButtonDetail>
            <ButtonDetail>          
                <ButtonDisplay> 
                    <Button 
                        Size='small'
                        ButtonLabel='SMALL'
                        Color={getButtonColor()} 
                        />
                    <Button 
                        ButtonLabel='MEDIUM'
                        Color={getButtonColor()} 
                        />
                    <Button 
                        Size='large'
                        ButtonLabel='LARGE'
                        Color={getButtonColor()} 
                        />
                </ButtonDisplay>
                <p>
                    There are 3 different sizes that determine font-size and padding. The size of the container can change the overall size of each button for easy, responsive design.
                </p>
                <ButtonSizeSnippet />
            </ButtonDetail>  
            <ButtonDetail>
                <ButtonDisplay> 
                    <Button 
                        ButtonLabel='SOLID'
                        Color={getButtonColor()} 
                        />
                        <Button
                        Style='outline'
                        ButtonLabel='OUTLINE'
                        Color={getButtonColor()} 
                        />
                            <Button 
                        Style='ghostHover'
                        ButtonLabel='HOVER'
                        Color={getButtonColor()} 
                        />
                    <Button 
                        Style='link'
                        ButtonLabel='LINK'
                        Color={getButtonColor()} 
                        />
                </ButtonDisplay>
                <p>
                    There are 4 different styles available, depending on the purpose and importance of the button. Please test the contrast of your chosen color theme against your background color. Not all colors are appropriate as every style of button.
                </p>
                <ButtonStyleDemoSnippet />
            </ButtonDetail>
            <ButtonDetail>
                <ButtonDisplay>
                    <Button
                        Oval
                        ButtonLabel='OVAL PROP'
                        Color={getButtonColor()} 
                    />
                    <Button 
                        ButtonLabel='DEFAULT'
                        Color={getButtonColor()} 
                    />
                </ButtonDisplay>
                <p>
                An oval shape is available in addition to the default ractangle to match a wider range of styles.  
                </p>
                <ButtonOvalSnippet />
            </ButtonDetail>
            <ButtonDetail>
                <ButtonDisplay>
                        <Button                       
                            Icon
                            ButtonLabel='LEFT'
                            Color={getButtonColor()} 
                        />
                        <Button 
                            Icon
                            IconType='send'
                            IconPosition='right'
                            ButtonLabel='RIGHT'
                            Color={getButtonColor()} 
                        />
                    </ButtonDisplay>
                    <p>
                        Icons can be added to to indicate a specific purpose. They can be placed on either the right or left side of the button. <a href="#">The SVG Icon library can be found here</a>. You can also add special characters as text within the label.
                     </p>
                     <ButtonIconSnippet />
                </ButtonDetail>
                <h3>Button Group</h3>
                <h4>
                    Use the ButtonGroup to signify that the functions performed by each button are related to one another.
                 </h4>
                <ButtonDetail>
                    <ButtonDisplay>
                        <ButtonGroup 
                            GroupLabel={buttonLabels}
                            Color={getButtonColor()} 

                        />
                    </ButtonDisplay>
                    <ButtonDisplay>
                        <ButtonGroup 
                            Oval
                            GroupLabel={buttonLabels}
                            Color={getButtonColor()} 

                        />
                    </ButtonDisplay>
                    <p>The ButtonGroup component will display a minimum of 2 buttons. Use the same props as the Button component to style the ButtonGroup. Notice how the border radius applies only to the first and last button, creating a seamless appearance.</p>
                </ButtonDetail>

                <ButtonDetail>
                    <ButtonDisplay>
                        <ButtonGroup 
                            GroupLabel={buttonLabelsTwo}
                            Size='small'
                            Color={getButtonColor()} 

                        />
                    </ButtonDisplay>
                    <p>
                        Add and subtract buttons from the group simply by adding and subtracting labels from an array.
                    </p>
                    <ButtonGroupSnippet />
                </ButtonDetail>
                <ButtonDetail>
                    <ButtonDisplay>
                        <ButtonGroup 
                            GroupLabel={buttonLabels}
                            Size='small'
                            Icon
                            IconPosition='left'
                            IconType='settings1'
                            Color={getButtonColor()} 

                        />
                    </ButtonDisplay>
                    <ButtonDisplay>
                        <ButtonGroup 
                            GroupLabel={buttonLabels}
                            Size='small'
                            Icon
                            IconPosition='right'
                            IconType='settings1'
                            Color={getButtonColor()} 

                        />
                    </ButtonDisplay>
                    <p>
                       Pass the Icon, IconPosition, and IconStyle props exactly as you would with the Button component. Note how the icon displays only in the first and last button in the ButtonGroup.
                    </p>
                </ButtonDetail>
                <h3>Icon Buttons</h3>
                <h4>The IconButton is used for a singular function, depicted by the icon.</h4>
                <ButtonDetail>
                    <ButtonDisplay>
                        <IconButton 
                            IconType='info'
                            Color={getButtonColor()} 
                        />
                         <IconButton 
                            IconType='settings2'
                            Style='outline'
                            Color={getButtonColor()} 
                        />
                         <IconButton 
                            IconType='heart'
                            Style='ghostHover'
                            Color={getButtonColor()} 
                        />
                    </ButtonDisplay>
                    <p><em>(The link style is not available for use with the Icon Buttons.)</em></p>
                    <IconSnippet />
                </ButtonDetail>
                <h3>Button Props</h3>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Color</td>
                                <td>Pre-styled color themes</td>
                                <td>string</td>
                                <td>indigo</td>
                                <td>red, pink, orange, yellow, green, teal, blue, cyan, indigo, purple, gray, black, white</td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>Controls font-size and padding only</td>
                                <td>string</td>
                                <td>medium</td>
                                <td>small, medium, large</td>
                            </tr>
                            <tr>
                                <td>Style</td>
                                <td>Overall style of the button</td>
                                <td>string</td>
                                <td>solid</td>
                                <td>solid, outline, ghostHover, link</td>
                            </tr>
                            <tr>
                                <td>Icon</td>
                                <td>Adds an SVG icon to the button</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>IconType</td>
                                <td>Choice of icons</td>
                                <td>string</td>
                                <td>search</td>
                                <td>Icon library is <a href="#">here</a></td>
                            </tr>
                            <tr>
                                <td>IconPosition</td>
                                <td>Placement of Icon</td>
                                <td>string</td>
                                <td>left</td>
                                <td>left, right</td>
                            </tr>
                            <tr>
                                <td>Oval</td>
                                <td>Oval vs rectangle shape of button(s)</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Disabled</td>
                                <td>Disables button and changes styling</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>ButtonLabel</td>
                                <td>Creates the label for the button</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>GroupLabel*</td>
                                <td>Creates the string of labels for the buttons</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>Handles click event</td>
                                <td>event: onClick ={'>'} void</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td colSpan={5}>
                                    *This is for the ButtonGroup component only. For the Button component, use ButtonLabel.
                                </td>
                            </tr>
                        </tbody>
                </StyledTable>
                </section>
        </Layout>
    )
}
export default Buttons



