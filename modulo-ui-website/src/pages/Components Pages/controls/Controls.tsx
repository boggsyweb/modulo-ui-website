// To do: Code snippets for all of the toggle variations

import Layout from '../../../components/Layout';
import StyledTable from '../../../styles/StyledTable';
import Toggle from './Toggle';
import RangeComp from './Range';
const Controls = () => {

    return (
    <Layout>
        <section>
            <h2>Controls</h2>
                <h3>Toggle Switch</h3>
                    <h4>Toggles can be user-friendly binary selectors.</h4>
        <Toggle />
                <h3>Range</h3>
                    <h4>Use a range to allow the user to enter a value that is approximate. The range can be set to register custom values anywhere between 0 and 100.</h4>
        <RangeComp />
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
                        <td>large and small sizes</td>
                        <td>string</td>
                        <td>small</td>
                        <td>small, large</td>
                    </tr>
                    <tr>
                        <td>Disabled</td>
                        <td>Disables and changes styling</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td></td>
                        <td>string</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td></td>
                        <td>string</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td></td>
                        <td>number</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>min</td>
                        <td>Min sets the minimum value that a range slider can have.</td>
                        <td>number</td>
                        <td>-</td>
                        <td>0-100</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>Max sets the maximum value that a range slider can have.</td>
                        <td>number</td>
                        <td>-</td>
                        <td>0-100</td>
                    </tr>
                    <tr>
                        <td>step</td>
                        <td>Step defines the increment or decrement value when the slider is moved.</td>
                        <td>number</td>
                        <td>1</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>list</td>
                        <td>Create a datalist to allow for reference points for values of the range.</td>
                        <td>string</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>Adds an aria-label for screen readers</td>
                        <td>string</td>
                        <td>'toggle switch'(for ToggleSwitch) 'range'(for Range)</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>onChange</td>
                        <td>Handles range change event</td>
                        <td>(event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </StyledTable> 
        </section>
    </Layout>
    )
}
export default Controls
