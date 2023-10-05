import { Button, ToggleSwitch, Range } from "modulo-ui";
import styled from '@emotion/styled'
import Layout from "../../components/Layout";
import { ButtonStyleSnippet, ToggleStyleSnippet, RangeStyleSnippet } from "../../components/CodeSnippets";

const StylingDisplay = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;
    & p {
        text-align: center;
        font-weight: bold;
        padding: 0 1.5em;
    }
    & ul {
        list-style: circle;
    }
`;
const StylingDetail = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1em;
    padding: 2em .5em;
`;
const HoverDiv = styled.div`
    & button {
        transition: 0.2s;
        &:hover {
            box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
        }
    }
`;
const OutlineDiv = styled.div`
    & button {
        outline: 2px solid lawngreen;
    }
`;
const ColorDiv = styled.div`
    & button {
        background-color: #FF1493;
        color: white;
    }
`;
const FontDiv = styled.div`
    & button {
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        color: lawngreen;
        }
`;
const ToggleDiv = styled.div`  
    display: flex;
    justify-content: center;
    margin: 1.3em 0;

    & input:checked + span::before {
        background-color: mediumvioletred;
    }
    & span {
        background-color: mediumturquoise;
        &:hover {
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
                }
        &::before {
         background-color: mediumvioletred;
        }
    }
`;
const RangeDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 30%;
    margin: 1.3em auto;

    & input {
        background-color: mediumturquoise;
        
        &::-webkit-slider-thumb {
            background: lawngreen;
            border: darkgreen 2px solid;
        }
        &::-moz-range-thumb {
            background: lawngreen;
            border: darkgreen 2px solid;
        }
        &:focus-visible::-webkit-slider-thumb {
            outline: max(2px, 0.2em) solid darkgreen;
            outline-offset: max(2px, 0.15em);
        }
        &:focus-visible::-moz-range-thumb {
            outline: max(2px, 0.2em) solid darkgreen;
            outline-offset: max(2px, 0.15em);
        }
    }
`;

const AltStyles = () => {
    return (        
     <Layout>
        <section>
            <h1>Styling</h1>
            <h2>Styling Options</h2>
            <h3>The components in Módulo UI come with a number of different props that determine colors, sizes, etc., making them easy to work with. However, If you want to customize the components to better fit your theme, you can overwrite many of the default props with a few quick changes.</h3>
        <StylingDisplay>
            <p>The color props are available to the Button (and related components like ButtonGroup and IconButton), ToggleSwitch, Range, Checkbox and Radio. The 'disabled' prop can be applied to the component regardless of whether the styling is passed from the props or overwritten with custom CSS.</p>
            <StylingDetail>
                <Button Color="red" ButtonLabel="Red"/>
                <Button Color="pink" ButtonLabel="Pink"/>
                <Button Color="orange" ButtonLabel="Orange"/>
                <Button Color="yellow" ButtonLabel="Yellow"/>
                <Button Color="green" ButtonLabel="Green"/>
                <Button Color="teal" ButtonLabel="Teal"/>
                <Button Color="blue" ButtonLabel="Blue"/>
                <Button Color="cyan" ButtonLabel="Cyan"/>
                <Button Color="indigo" ButtonLabel="Indigo"/>
                <Button Color="purple" ButtonLabel="Purple"/>
                <Button Color="black" ButtonLabel="Black"/>
                <Button Color="white" ButtonLabel="White"/>
                <Button Color="gray" ButtonLabel="Gray"/>
                <Button Disabled ButtonLabel="Disabled"/>
            </StylingDetail>
        </StylingDisplay>
        <StylingDisplay>
            <StylingDetail>
        <HoverDiv>
            <Button 
            ButtonLabel="Hover"
            />
        </HoverDiv>
        <OutlineDiv>
        <Button 
            ButtonLabel="Outline"
            />
        </OutlineDiv>
        <ColorDiv>
            <Button 
            ButtonLabel="Color"
            />
        </ColorDiv>
        <FontDiv>
            <Button 
            ButtonLabel="Font"
            />
        </FontDiv>
        </StylingDetail>
        <p>Overwrite Button component styles by wrapping them in a div and declaring the styling for the button element. Change the background color, text color, add hover effects, etc. The font-family in the Button component is set to 'inherit', but that can easily be overwritten as well.</p>
        <ButtonStyleSnippet />
        </StylingDisplay>
        <StylingDisplay>
            <ToggleDiv>
                <ToggleSwitch />
            </ToggleDiv>
            <p>Because components like the ToggleSwitch are made up of a checkbox with other elements and pseudo-classes that create the look of a switch, you must style all of the relevant parts that make up the component.</p>
            <ToggleStyleSnippet />
        </StylingDisplay>
        <StylingDisplay>
            <RangeDiv>
                <Range label="range"/>
            </RangeDiv>
            <p>Styling the Range component also requires getting ahold of all of the relevant elements. Be aware that in order to get consistent styling across browsers, you must declare styles for webkit(Safari) and moz(Firefox).</p>
            <RangeStyleSnippet />
        </StylingDisplay>
        <StylingDisplay>
            <ul>
                <li>The Modal is open to virtually any styling option, as whatever content you like needs only to be wrapped in the Modal component.
                </li>
                <li>
                The Card component is more rigid with its styling, as the background is already set to respond to a light and dark theme. However, of course the button styling and image are still open to be re-styled to your liking.
                </li>
                <li>
                While the components in Módulo UI as well as this website were styled with Emotion/Styled, you can feel free to use vanilla CSS, virtually any preprocessor, or virtually any CSS-in-JS system instead.
                </li>
            </ul>
        </StylingDisplay>
        </section>
        </Layout>        
    )
}
export default AltStyles