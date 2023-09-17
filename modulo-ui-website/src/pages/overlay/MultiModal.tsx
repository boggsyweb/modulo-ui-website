import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Modal, Button, IconButton } from 'modulo-ui';
import Dropdown from '../../Dropdown';

const ModalDisplay = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1.5em 0;

    & button {
        transition: 0.2s;

    }
`;
const ModalInner = styled.div`
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
const DropDownText = styled.div`
    text-align: justify;
    padding: 0 1em;
    background-color: #F5F5F5;
`;

const MultiModal = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                <ModalInner>
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
                                IconType='expandDown'
                                ButtonLabel='Click'
                             />
                            }
                        >                    
                        <DropDownText>
                        <p>Reef sails warp bilged on her anchor clap of thunder jack gibbet careen jolly boat Gold Road fluke. Clipper log bilge water overhaul wench grog quarter run a shot across the bow carouser hearties. Bucko parley line boatswain Sink me provost Sail ho gunwalls code of conduct belaying pin.</p>
                        <p>Ballast pillage Barbary Coast capstan Pieces of Eight quarterdeck Sea Legs fire in the hole barkadeer me. Reef sails Brethren of the Coast mizzen cutlass marooned grog blossom boom quarter mutiny crack Jennys tea cup. Gold Road pirate yawl main sheet stern man-of-war Jack Ketch gally run a rig brig.</p>
                        </DropDownText>
                        </Dropdown>
                </ModalInner>
            </Modal>
            </ModalDisplay>
        )
    }
    export default MultiModal
