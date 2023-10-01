import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Modal, Button, IconButton } from 'modulo-ui';
import {FadeIn, FadeOut} from '../../styles/transitions';

const ModalDisplay = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.5em 0;

  & button {
    transition: 0.2s;
    &:hover {
      box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
    }
  }
`;

const ModalInner1 = styled.div<{ isOpen: boolean }>`
  background-color: #F5F5F5;
  color: #333333;
  padding: 3rem;
  border-radius: 5px;
  ${({ isOpen }) => (isOpen ? FadeIn() : FadeOut())}
  & h2 {
    margin-top: 1em;
  }
`;

const BaseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleCloseButton = () => {
    closeModal();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <ModalDisplay>
      <Button ButtonLabel='Open' onClick={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalInner1 isOpen={isOpen}>
          <IconButton IconType="close" onClick={handleCloseButton} />
          <h2>Hello! This is a basic modal.</h2>
          <p>Click the button or outside of the modal to close.</p>
        </ModalInner1>
      </Modal>
    </ModalDisplay>
  );
};

export default BaseModal;
