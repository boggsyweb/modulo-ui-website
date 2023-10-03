import Layout from '../../../components/Layout';
import RadioCheckForm from "./RadioCheckForm";
import StyledTable from '../../../components/StyledTable';
import Checkboxes from './Checkbox';
import RadioButtons from './RadioButtons';

const Inputs = () => {

    return (
        <Layout>
          <section>
                <h2>Inputs</h2>
                <h3>Radio Buttons</h3>
                <h4>Radio buttons are used to select one option from a set.</h4>
                    <RadioButtons />
                <h3>Checkboxes</h3>
                <h4>Checkboxes are used to select more than one option from a set.</h4>
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
                                <td>There is one name for a group of radio buttons, whereas each individual checkbox gets its own name.</td>
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
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>label</td>
                                <td></td>
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