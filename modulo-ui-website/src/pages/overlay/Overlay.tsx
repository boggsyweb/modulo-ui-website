import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import StyledTable from '../../components/StyledTable';
import ModalComp from './Modal';

const ModalStyle = styled.div`
    background-color: gray;
    padding: 5rem;  
    border-radius: 5px; 
`;

const Overlay = () => {
    return (
        <Layout>
            <section>
                <h2>Modal</h2>
                <h3>A modal gets the user's attention with a window that overlays the primary content.</h3>
                <ModalComp />
            </section>
        </Layout>
    )
}
export default Overlay