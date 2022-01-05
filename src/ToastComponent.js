import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-bootstrap';
import './ToastComponent.css'

export default function ToastComponent() {


    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <div className="App">
            {/* <Toast
                isOpen={isOpen}
                hasAutoDismiss={false}
                hasCloseBtn
                closeCallback={() => setToast(false)}
                description="There's some great info here."
                title="App Notification!!"
                duration={5000}
                classNames={['info']}  // 'success', 'info', 'warning', 'error'
            /> */}
            <button onClick={toggleShowA} className="btn-sm btn-primary mb-2">
                Toggle Toast <strong>with</strong> Animation
            </button>

            <div className="position">
                <ToastContainer  position='middle-center' >
                    <Toast
                        show={showA}
                        onClose={toggleShowA}
                        delay={5000}
                        autohide={true}
                        bg={'primary'} //'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'

                    >
                    <Toast.Header>
                        {/* <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        /> */}
                        <span className="loggedState iconify" data-icon="tabler:brand-react-native"></span>
                        <strong className="me-auto">&nbsp;&nbsp;&nbsp;Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body className='toast-body'>
                        Woohoo, you're reading this text in a Toast!
                    </Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </div>
    );
}


