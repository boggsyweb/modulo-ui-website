import  { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Modal, ToggleSwitch, IconButton } from 'modulo-ui';
import {FadeIn, FadeOut} from '../../../styles/transitions';



const ModalDisplay = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1.5em 0;

    & button {
        transition: 0.2s;
        &:hover {
            box-shadow: 1px 3px 3px rgb(0, 0, 0, .5);
        }
    }
`;
const ModalInner = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #F5F5F5;
    color: #333333;
    padding: 3rem;  
    margin: 4em 0;
    border-radius: 5px;   
    max-height: 80vh;
    overflow-y: scroll;
    ${({ isOpen }) => (isOpen ? FadeIn() : FadeOut())}


    & h2 {
        margin-top: 1em;
    }
`;
const TACSpan = styled.div`
    text-align: justify;
    min-width: 17.5em;

    & p:last-of-type {
        font-weight: 700;
    }
`;

const ModalForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setShowThankYou(false); 
  };
  const closeModal = () => setIsOpen(false);

  const handleToggleSwitchChange = () => {
    setShowThankYou(true);

    setTimeout(() => {
        closeModal();
      }, 1400);
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
            <IconButton 
            onClick={openModal}
            Size='large'
            IconType='settings1'
            />
                <Modal isOpen={isOpen} onClose={closeModal} OutsideClick={false}>
                    <ModalInner isOpen={isOpen}>
                        <TACSpan>
                            <h4>Yer Terms and Conditions</h4>
                            <p>Arrr, ye scallywags be enterin' into a covenant betwixt ye and the mysterious crew o' this digital realm. By proceeedin' to browse or make use o' this website, ye be agreein' to abide by these here Terms and Conditions, or else ye be walkin' the plank!</p>
                            <p>
                            1. Parlay o' Usage: This digital treasure chest be intendin' solely fer yer entertainment and enlightenment. Ye shall not plunder, pillage, or lay waste to this site or its contents, nor shall ye be interferin' with its proper functionin'. Any attempts to circumvent the security measures or maraud this ship will be met with swift retribution. We reserve the right to cast ye adrift from this site if ye be found guilty o' such mischief.
                            </p>
                            <p>
                            2. Ye Shall Not Hornswaggle: All the content herein, be it text, images, or code, be the property o' the captain and the crew. Ye may peruse and share it among yer mates, but ye shall not be usin' it fer yer own ill-gotten gains. Plunderin', copyin', or distributin' without the captain's permission be strictly forbidden, lest ye find yerself facin' the wrath o' Davy Jones himself.
                            </p>
                            <p>By continuin' to sail these digital waters, ye acknowledge and swear on yer trusty cutlass that ye be upholdin' these Terms and Conditions. If ye fail to do so, ye shall be held accountable by the laws o' the high seas and the curse o' the ghostly sea creatures. </p>
                        </TACSpan>
                        {showThankYou ? (
                            <p>Yer free to set sail, matey! &#9760;&#65039;</p>
                            ) : (
                            <ToggleSwitch
                                onChange={handleToggleSwitchChange}
                                OutsideText
                                OutsideLeft=''
                                OutsideRight="Do ya be consentin?"
                            />
                            )}
                    </ModalInner>
                </Modal>
        </ModalDisplay>

  );
};
export default ModalForm;
