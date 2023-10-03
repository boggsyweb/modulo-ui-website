import { useState } from 'react';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import StyledTable from '../../components/StyledTable';
import { Button, ButtonGroup, IconButton } from 'modulo-ui';
import { ButtonSnippet, ButtonGroupSnippet, IconSnippet } from '../../components/CodeSnippets';


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

    const handleButtonClick = () => {
    setCount(count + 1);
  };

    const buttonLabels = ['BUTTON 1', 'BUTTON 2', 'BUTTON 3']
    const buttonLabelsTwo = ['BUTTON 1', 'BUTTON 2', 'BUTTON 3', 'BUTTON 4']

    return (
        <Layout>
            <section>
            <h2>Buttons</h2>
            <h4>
                The button is used to trigger events and actions. It has a range of styles that can be used for different purposes. 
            </h4>
            <ButtonDetail>
                <ButtonDisplay>
                    <Button 
                    Icon
                    IconType="settings1"
                    ButtonLabel="Submit"
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
                        ButtonLabel='SMALL'/>
                    <Button 
                        ButtonLabel='MEDIUM'/>
                    <Button 
                        Size='large'
                        ButtonLabel='LARGE'/>
                </ButtonDisplay>
                <p>
                    There are 3 different sizes that determine font-size and padding. The size of the container can change the overall size of each button for easy, responsive design.
                </p>
            </ButtonDetail>  
            <ButtonDetail>
                <ButtonDisplay> 
                    <Button 
                        ButtonLabel='SOLID'/>
                        <Button 
                        Style='outline'
                        ButtonLabel='OUTLINE'/>
                    <Button 
                        Style='ghostHover'
                        ButtonLabel='HOVER'/>
                    <Button 
                        Style='link'
                        ButtonLabel='LINK'/>
                </ButtonDisplay>
                <p>
                    There are 4 different styles available, depending on the purpose and importance of the button. Please test the contrast of your chosen color theme against your background color. Not all colors are appropriate as every style of button.
                </p>
            </ButtonDetail>
            <ButtonDetail>
                <ButtonDisplay>
                    <Button
                        Oval
                        ButtonLabel='OVAL PROP'
                    />
                    <Button 
                        ButtonLabel='DEFAULT'/>
                </ButtonDisplay>
                <p>
                An oval shape is available in addition to the default ractangle to match a wider range of styles.  
                </p>
            </ButtonDetail>
            <ButtonDetail>
                <ButtonDisplay>
                        <Button                       
                            Icon
                            IconType='mail'
                            ButtonLabel='LEFT'
                        />
                        <Button 
                            Icon
                            IconType='mailOpen'
                            IconPosition='right'
                            ButtonLabel='RIGHT'
                        />
                    </ButtonDisplay>
                    <p>
                        Icons can be added to to indicate a specific purpose. They can be placed on either the right or left side of the button. <a href="#">The SVG Icon library can be found here</a>. You can also add special characters as text within the label.
                     </p>
                </ButtonDetail>
                <h3>Button Group</h3>
                <h4>
                    The button group is styled to create a seamless look.
                 </h4>
                <ButtonDetail>
                    <ButtonDisplay>
                        <ButtonGroup 
                            GroupLabel={buttonLabels}
                        />
                    </ButtonDisplay>
                    <ButtonDisplay>
                        <ButtonGroup 
                            Oval
                            GroupLabel={buttonLabels}
                        />
                    </ButtonDisplay>
                    <p>Oval and default, rectangle options are also available for the button group</p>
                </ButtonDetail>

                <ButtonDetail>
                    <ButtonDisplay>
                        <ButtonGroup 
                            GroupLabel={buttonLabelsTwo}
                            Size='small'
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
                        />
                    </ButtonDisplay>
                    <ButtonDisplay>
                        <ButtonGroup 
                            GroupLabel={buttonLabels}
                            Size='small'
                            Icon
                            IconPosition='right'
                            IconType='settings1'
                        />
                    </ButtonDisplay>
                    <p>
                        Placement of an icon in the button group is limited either to the left in the first button, or to the right in the last button.
                    </p>
                </ButtonDetail>
                <h3>Icon Buttons</h3>
                <h4>Icon buttons are used for specific functionality depicted by the icon.</h4>
                <ButtonDetail>
                    <ButtonDisplay>
                        <IconButton 
                            IconType='info'
                        />
                         <IconButton 
                            IconType='settings2'
                            Style='outline'
                        />
                         <IconButton 
                            IconType='heart'
                            Style='ghostHover'
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

