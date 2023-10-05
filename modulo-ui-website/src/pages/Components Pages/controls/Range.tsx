import  { useState, ChangeEvent } from 'react';
import styled from '@emotion/styled'
import { Range } from 'modulo-ui'
import { RangeSnippet, RangeSizeSnippet } from '../../../components/CodeSnippets';
import useColorScheme from '../../../hooks/theme-colors';

const RangeDetail = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;

    & p {
        text-align: center;
        font-weight: 500;
    }
`;
const RangeDisplay = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1.5em 0;

`;
const FlexLayout = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    width: 100%;
`;
const GridLayout = styled.div`
    display: grid;
    grid-template-columns: .5fr 1fr .5fr;
    align-items: center;
`;

const RangeComp = () => {
    const [sliderValue, setSliderValue] = useState(11);
    
    const preferredColorScheme = useColorScheme(); 

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSliderValue(event.target.valueAsNumber);
      };
      const getControlColor = () => {
        return preferredColorScheme === 'dark' ? 'cyan' : 'indigo';
      };

    return (
        <>
        <RangeDetail>
            <RangeDisplay>
                <GridLayout>
            <label htmlFor="rangeValue">Volume</label>
                <Range
                    min={0}
                    max={11}
                    step={1}
                    value={sliderValue}
                    onChange={handleChange}
                    id='rangeValue'
                    name='rangeValue'
                    Color={getControlColor()} 
                />
                <p>{sliderValue}</p>
                </GridLayout>
            </RangeDisplay>
            <p>You can create a volume control (or any type of range) that goes up to 11.</p>
            <RangeSnippet />
        </RangeDetail>
        <RangeDetail>
            <RangeDisplay>
                <FlexLayout>
                    <Range               
                    Color={getControlColor()} 
                    />
                    <Range 
                        Size='large'
                        Color={getControlColor()} 
                    />
                </FlexLayout>
            </RangeDisplay>
            <p>The Range component Size prop changes the input and the slider-thumb/range-thumb only. The overall width will be determined by the Range component's container.</p>
            <RangeSizeSnippet />
        </RangeDetail>
        </>
    )
}
export default RangeComp