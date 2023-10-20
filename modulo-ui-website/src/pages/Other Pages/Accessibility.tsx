import styled from '@emotion/styled'
import Layout from "../../components/Layout";
import webaim from "../../assets/webaim.webp"
import useColorScheme from '../../hooks/theme-colors';
import {Button, Checkbox, ToggleSwitch, Radio, Range} from 'modulo-ui'

const AccessDisplay = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;

    & li {
        font-weight: 500;
        list-style: circle;
        margin: .5em 0;
    }
    & h4 {
        text-decoration: underline 2px;
    }
    & img {
        box-shadow: 1px 1px 4px 3px rgb(0, 0, 0, .5);

    }
`;

const AccessDetail = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: .5em;
    margin: 1.5em;

    & fieldset {
        border-radius: 5px;
    }
    & span {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 1em;
    }
`;

const AccessGuidelines = () => {
    const checkboxesData = [
        { id: 'Checkbox 1', label: 'Option 1', name: 'options', value: "1" },
        { id: 'Checkbox 2', label: 'Option 2', name: 'options', value: "2" },
        { id: 'Checkbox 3', label: 'Option 3', name: 'options', value: "3"  },
      ];
      const radioOptions = [
        { label: "Radio 1", id: "option1", value: "1" },
        { label: "Radio 2", id: "option2", value: "2" },
        { label: "Radio 3", id: "option3", value: "3" },
        { label: "Radio 4", id: "option4", value: "4" },
      ];
      const preferredColorScheme = useColorScheme(); 

      const getCompColor = () => {
        return preferredColorScheme === 'dark' ? 'cyan' : 'indigo';
      };
    return (
        <Layout>
            <section>
                <h1>Accessibility</h1>
                <h2>Accessibility Guidelines and Suggestions</h2>
                <h3>The components in the Módulo UI library have been designed to make them accessible to as many users as possible without having to add further modifications.</h3>
                <AccessDisplay>
                    <h4>Focus</h4>
                        <ul>
                            <li>
                            All of these components are keyboard navigatable, as well as having a distinct outline when focused on. While you can modify the look of the focus styling, it is <em>highly recommended you do not remove it altogether</em>.
                            </li>
                            <li>
                            Use your tab key to navigate through this series of components to see the focus styling*. All of the components function like regular HTML elements when used with a keyboard. (Because the ToggleSwitch is built around a checkbox, it is triggered with the spacebar)
                            </li>
                        </ul>
                    <AccessDetail>
                        <span>
                            <Button 
                                ButtonLabel='Solid'                         
                                Color={getCompColor()} 
                            />
                            <Button  
                                Style='ghostHover' 
                                ButtonLabel='Hover' 
                                Color={getCompColor()}
                            />
                        </span>
                        <span>
                            <fieldset>
                                <legend>Checkboxes</legend>
                                {checkboxesData.map((checkboxData) => (
                                    <Checkbox
                                        value={checkboxData.value}
                                        id={checkboxData.id}
                                        label={checkboxData.label}
                                        name={checkboxData.name}
                                        key={checkboxData.id}
                                        Color={getCompColor()}
                                    />
                                    ))}
                            </fieldset>    
                            <fieldset>
                                <legend>Radio Buttons</legend>
                                    {radioOptions.map((option) => (
                                    <Radio
                                        label={option.label}
                                        name="radioGroup"
                                        id={option.id}
                                        value={option.value}
                                        key={option.id}
                                        Color={getCompColor()}
                                    />
                                    ))}
                            </fieldset>    
                        </span>
                        <span> 
                            <ToggleSwitch Color={getCompColor()}/>   
                            <Range Color={getCompColor()}/>   
                        </span> 
                    </AccessDetail>
                 <hr />
                 <aside>
                 <p>*About Safari: Unless the Safari user's accessibility settings allow for it, the components will not respond to keyboard navigation. To change Safari settings, press [&#8984; + , (command and comma)], click 'advanced' to the far right of the menu, and check the box that says 'Press tab to highlight each item on a webpage'.</p>
                 </aside>
            </AccessDisplay>
            <AccessDisplay>
                <h4>Fonts</h4>
                    <p>Módulo UI does not have any pre-determined font styling, other than 'inherit' within the Button and Card components. That said, here are a few best practices to keep in mind when choosing font styles:</p>
                  <ul>
                    <li>
                    Limit highly-stylized fonts to headings and other areas that use a large font-size, or eliminate them altogther.
                    </li>
                    <li>Consider a dyslexia-friendly font. Lexend is a popular option that was designed for people with dyslexia and similar conditions. It can be imported from Google Fonts. Traditional sans-serif fonts can be used as well. This project uses Ubuntu, which is also a sans-serif font available from Google. It is thought to be accessible to most people.
                    </li>
                    <li>
                    Be sure your font-size is large enough to read for most users (minimum 16px or 1em). Additionally test that your users are able to A, enlarge the font-size on their monitor and B, the text enlarges without overlapping, distorting, or breaking out of its containers. Line height, as well as the spacing between characters are also important factors to be aware of.
                    </li>
                  </ul>
            </AccessDisplay>
            <AccessDisplay>
                <h4>Labels</h4>
                <ul>
                    <li>
                        Some components like the ToggleSwitch, Range, and IconButton have a 'label' prop that can be passed to customize their aria-label. This option has been added because these components do not have a label that can be read by screen readers otherwise. If you do not add a custom string value for the 'label' prop, their the default values will be passed.
                    </li>
                    <li>
                        When the ButtonLabel and GroupLabel props are passed to the Button and ButtonGroup components respectively, those strings will be able to be accessed by screen readers. 
                    </li>
                </ul>
            </AccessDisplay>
            <AccessDisplay>
                <h4>Contrast</h4>
                <ul>
                    <li>
                    All of the color schemes within each component have been tested to ensure adequate contrast for most users. For instance, the text colors and background colors in the button color schemes pass all WebAIM contrast tests.
                    </li>
                    <li>
                    Because predicting where the components from the Módulo UI library may end up is impossible, here is a chart showing the WebAIM contrast scores for each color. The background colors used in this website are #333333 and #F5F5F5, as depicted in the top left and top right sections of the chart. The bottom left and right sections show the color options against a darker and lighter background respectively.
                    </li>
                </ul>
            <img src={webaim} alt="image of different color circles against different shades of backgrounds with Web Aim contrast scores" />
            </AccessDisplay>
            </section>
        </Layout>
    )
}
export default AccessGuidelines