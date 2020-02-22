import React, { Component } from 'react';
import Modal from 'react-modal';
import IdleTimer from 'react-idle-timer';

export class InactivityDetection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timeout: 1000 * 3,
            modalIsOpen: false
        };

        this.idleTimer = null;
        this.onIdle = this._onIdle.bind(this);
    }

    _onIdle(e) {
        this.openModal();
    }

    openModal() {
        this.setState({ ...this.state, modalIsOpen: true});
    }

    closeModal() {
        this.setState({ ...this.state, modalIsOpen: false});
    }

    getTimeOutInSeconds = () => this.state.timeout / 1000;

    render() {
        return (
            <>
                <IdleTimer  ref={ ref => this.idleTimer = ref }
                            element={ document }
                            onIdle={ this.onIdle }
                            debounce={ 250 }
                            timeout={ this.state.timeout }
                />
                <Modal  isOpen={ this.state.modalIsOpen }
                        contentLabel='Testy Modal'>
                    <p>You have been idle for { this.getTimeOutInSeconds() } seconds!</p>
                </Modal>
            </>
        );
    }
};