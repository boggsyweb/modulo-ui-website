import Layout from '../../components/Layout';
import StyledTable from '../../components/StyledTable';
import Toggle from './Toggle';
import RangeComp from './Range';
const Controls = () => {

    return (
    <Layout>
        <section>
            <h2>Controls</h2>
                <h3>Toggle Switch</h3>
                <h4>Toggles can be a user-friendly binary selector.</h4>
        <Toggle />
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
                        <td></td>
                        <td>number</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td></td>
                        <td>number</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>step</td>
                        <td></td>
                        <td>number</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>list</td>
                        <td></td>
                        <td>string</td>
                        <td>-</td>
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
