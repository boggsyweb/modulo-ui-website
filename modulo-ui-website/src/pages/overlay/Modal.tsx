import { useState } from 'react';
import styled from '@emotion/styled';
import { Modal, Button } from 'modulo-ui';
import '../../index.css';

const ModalDetail = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.3em 0;

    & p {
        text-align: center;
        font-weight: 500;
    }
`;
const ModalDisplay = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1.5em 0;
`;
const ModalStyle = styled.div`
    background-color: var(--background-dark);
    padding: 5rem;  
    border-radius: 5px; 
`;

const ModalComp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
    <ModalDetail>
        <ModalDisplay>
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
        </ModalDisplay>
    </ModalDetail>
    )
}
export default ModalComp