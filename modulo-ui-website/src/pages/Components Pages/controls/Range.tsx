import  { useState, ChangeEvent } from 'react';
import styled from '@emotion/styled'
import { Range } from 'modulo-ui'
import { RangeSnippet } from '../../../components/CodeSnippets';

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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSliderValue(event.target.valueAsNumber);
      };

    return (
        <>
        <RangeDetail>
            <RangeDisplay>
                <FlexLayout>
                    <Range />
                    <Range 
                        Size='large'
                    />
                </FlexLayout>
            </RangeDisplay>
            <p>The range component can be small or large</p>
        </RangeDetail>
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
                />
                <p>{sliderValue}</p>
                </GridLayout>
            </RangeDisplay>
            <p>You can create a volume control (or any type of range) that goes up to 11.</p>
            <RangeSnippet />
        </RangeDetail>
        </>
    )
}
export default RangeComp