import styled from '@emotion/styled';
import Layout from '../../../components/Layout';
import StyledTable from '../../../styles/StyledTable';
import { ModalSnippet } from '../../../components/CodeSnippets';
import BaseModal from './BaseModal';
import ModalForm from './ModalConsent';
import MultiModal from './MultiModal';

const ModalDetail = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;

    & >p {
        text-align: center;
        font-weight: 500;
    }
`;
const FlexLayout = styled.div`
    display: flex;
    gap: 5em;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const ComingSoon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: darkgray;
    color: black;
    width: 65%;
    margin: 0 auto;
    padding: 2rem; 0;
    border-radius: 10px;
    border: 1px black solid;
`;

const Overlay = () => {
    return (
        <Layout>
            <section>
                <h2>Modal</h2>
                <h3>A modal gets the user's attention with a window that overlays the primary content.</h3>
                <ModalDetail>
                <BaseModal />
                <p>A very simple modal.</p>
                <ModalSnippet />
                </ModalDetail>
                <ModalDetail>
                    <FlexLayout>
                <ModalForm />
                <MultiModal />
                </FlexLayout>
                <p>The modal can accept any elements, styling, and functionality as children.</p>
                </ModalDetail>
                <ComingSoon>
                <h4>Coming Soon: </h4>
                <p>Tooltips & Alerts</p>
                </ComingSoon>
                    <h3>Modal Props</h3>
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
                                <td>isOpen</td>
                                <td>-</td>
                                <td>boolean</td>
                                <td>-</td>
                                <td>true, false</td>
                            </tr>
                            <tr>
                                <td>OutsideClick</td>
                                <td>Allows the modal to close by clicking outside the box.</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>true, false</td>
                            </tr>
                            <tr>
                                <td>Children</td>
                                <td>Allows any content to be inside the modal.</td>
                                <td>ReactNode</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>onClose</td>
                                <td>Handles any mechanism used to close the modal</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </StyledTable>
            </section>
        </Layout>
    )
}
export default Overlay