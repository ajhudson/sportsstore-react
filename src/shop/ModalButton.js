import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function ModalButton(props) {

    const [ modalIsOpen, setIsOpen ] = React.useState(false);

    function openTheModal() {
        setIsOpen(true);
    }

    function closeTheModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={ openTheModal }>Click to activate modal</button>
            <Modal  isOpen={ modalIsOpen }
                    contentLabel='Testy Modal'>
                <p>This is an example of a modal window</p>
            </Modal>
        </>
    );
    
};

export default ModalButton;