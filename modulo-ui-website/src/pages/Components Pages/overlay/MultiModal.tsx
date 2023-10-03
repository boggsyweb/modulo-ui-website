import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Modal, Button, IconButton } from 'modulo-ui';
import Dropdown from '../../../Dropdown';
import {FadeIn, FadeOut} from '../../../styles/transitions';


const ModalDisplay = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1.5em 0;

    & button {
        transition: 0.2s;
    }
`;
const ModalInner = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-65%, 0%);
    margin: 0 4.5em;
    padding: 2.5em;  
    border-radius: 5px;   
    max-width: 350px;
    width: 100%;
    max-height: 80vh;
    overflow-y: scroll;
    background-color: #F5F5F5;
    color: #333333;
    ${({ isOpen }) => (isOpen ? FadeIn() : FadeOut())}


    & h2 {
        margin-top: .5em;
    }
    & >button {
        margin: -1.7em 0 0 -1.7em;
        z-index: 2;
        &:hover {
            filter: drop-shadow(1px 3px 3px rgb(0, 0, 0, .7));
        }
    }
`;

const DropDownText = styled.div<{ isOpen: boolean }>`
    text-align: justify;
    padding: 0 1em;
    background-color: #F5F5F5;
    ${({ isOpen }) => (isOpen ? FadeIn() : FadeOut())}
`;

const MultiModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev); 
      };

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleCloseButton = () => {closeModal()};

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'; 
        } else {
          document.body.style.overflow = 'auto'; 
        }
      }, [isOpen]);

      return (
            <ModalDisplay>
            <Button 
                ButtonLabel='Open'
                onClick={openModal}
            />
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalInner isOpen={isOpen}>
                    <IconButton 
                        Style='outline'
                        IconType="close" 
                        onClick={handleCloseButton} />
                        <h2>This modal has a dropdown.</h2>
                     <Dropdown
                            trigger={
                             <Button
                                Size='small'
                                Icon
                                IconType={isDropdownOpen ? 'expandUp' : 'expandDown'} 
                                ButtonLabel='Click'
                                onClick={toggleDropdown}
                             />
                            }
                        >                    
                        <DropDownText isOpen={isDropdownOpen}>
                            <p>Ahoy matey! React components be like the treasure chests o' code. Each one be a self-contained piece o' ship, holdin' its own set o' HTML-like elements, JavaScript logic, and styles. These components be modular, just like buildin' a sturdy ship from a heap o' planks and sails. Ye can reuse 'em across yer entire crew's work, savin' ye time and effort, arrr!</p>
                            <p>But beware, ye scurvy dog! React components be a bit tricky to learn at first, but once ye get the hang o' 'em, ye'll be sailin' smooth waters in no time. Just remember, the heart o' yer React app be made up o' these components, so treat 'em well, and ye'll have a website fit for a pirate captain!</p>
                        </DropDownText>
                        </Dropdown>
                </ModalInner>
            </Modal>
            </ModalDisplay>
        )
    }
    export default MultiModal
