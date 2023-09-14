import { useState } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import StyledTable from '../components/StyledTable';
import { Modal, Button } from 'modulo-ui';

const ModalStyle = styled.div`
    background-color: gray;
    padding: 5rem;  
    border-radius: 5px; 
`;

const Overlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <Layout>
    <div>
        <Button 
        ButtonLabel='Open Modal'
        onClick={openModal}
        />

        <Modal isOpen={isOpen} onClose={closeModal} OutsideClick={false}>
            <ModalStyle>
                <h2>Hello, this is my custom modal content!</h2>
                <p>You can add any content and logic here.</p>
            </ModalStyle>
        </Modal>

    </div>
        </Layout>
    )
}
export default Overlay