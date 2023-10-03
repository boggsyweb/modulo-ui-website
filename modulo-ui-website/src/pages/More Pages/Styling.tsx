import { Button, ToggleSwitch, Range } from "modulo-ui";
import styled from '@emotion/styled'
import Layout from "../../components/Layout";
import { ButtonStyleSnippet, ToggleStyleSnippet } from "../../components/CodeSnippets";

const StylingDisplay = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;
    & p {
        text-align: center;
    }
`;
const StylingDetail = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 2em 0;
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
        background-color: lawngreen;
        color: darkgreen;
    }
`;
const ToggleDiv = styled.div`    
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
        &:focus::-webkit-slider-thumb {
            outline: max(2px, 0.2em) solid darkgreen;
            outline-offset: max(2px, 0.15em);
        }
        &:focus::-moz-range-thumb {
            outline: max(2px, 0.2em) solid darkgreen;
            outline-offset: max(2px, 0.15em);
        }
    }
`;

const AltStyles = () => {
    return (        
     <Layout>
        <section>
            <h2>Styling Options</h2>
            <h4>The components in Módulo UI come with a number of different colors and other options to make it easy to work with. However, If you want to customize the components to better fit your theme, you can override most of the built-in options.</h4>
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
        </StylingDetail>
        <p>Override Button component styles by wrapping them in a div and taking hold of the button element. Change the background color, text color, add hover effects, etc.</p>
        <ButtonStyleSnippet />
        </StylingDisplay>
        <StylingDisplay>
            <ToggleDiv>
                <ToggleSwitch />
            </ToggleDiv>
            <ToggleStyleSnippet />
            <p>Because components like the ToggleSwitch are made up of a checkbox with other elements and pseudo-classes to create the look of a switch, you must style all of the relevant parts that make up the component.</p>
        </StylingDisplay>
        <StylingDisplay>
            <RangeDiv>
                <Range />
            </RangeDiv>
        </StylingDisplay>
        </section>
        </Layout>        
    )
}
export default AltStyles