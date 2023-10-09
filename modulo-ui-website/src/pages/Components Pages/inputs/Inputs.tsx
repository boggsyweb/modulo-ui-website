// To do: Code snippets! Finish props chart
import Layout from '../../../components/Layout';
import RadioCheckForm from "./RadioCheckForm";
import StyledTable from '../../../styles/StyledTable';
import Checkboxes from './Checkbox';
import RadioButtons from './RadioButtons';

const Inputs = () => {

    return (
        <Layout>
          <section>
                <h1>Inputs</h1>
                <h2>Radio Buttons</h2>
                <h3>Radio buttons are used to select a single option from a set.</h3>
                    <RadioButtons />
                <h2>Checkboxes</h2>
                <h3>Checkboxes are used to select multiple options from a set.</h3>
                    <Checkboxes /> 
                    <RadioCheckForm/>
                <h3>Inputs Props</h3>
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
                                <td>large for desktop and small for mobile</td>
                                <td>string</td>
                                <td>small</td>
                                <td>small, large</td>
                            </tr>
                            <tr>
                                <td>Style*</td>
                                <td>*solid or outline style can be applied to the checkbox</td>
                                <td>string</td>
                                <td>outline</td>
                                <td>solid, outline</td>
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
                                <td>A group of radio buttons gets one name. Each individual checkbox gets its own name.</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>Each input in a group should have a unique id, and its corresponding label should use the "for" attribute to link to that id</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>Each input in a group should have a unique value. The value is what is sent to the server.</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                </StyledTable> 
          </section>
        </Layout>
    )
}
export default Inputs