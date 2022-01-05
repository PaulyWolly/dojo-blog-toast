import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';

import ToastContainer from 'react-bootstrap/ToastContainer'

// See - https://react-bootstrap.github.io/components/toasts/ for API
// See also - https://www.itsolutionstuff.com/post/react-bootstrap-toast-exampleexample.html


    // handleClick = () => {
    //     console.log('clciked to open Toast')
    // };

function BsToast() {

    const [show, setShow] = useState(false);

    // const handleClick = () => {
    //     console.log('clicked');
    // }

        return (


            <div className='toast-container' style={{ display: 'block', width: 800, padding: 40 }}>
                <h4>React-Bootstrap Toast Component</h4>

                <ToastContainer className='p-3'>
                <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    // delay={3000}
                    // autohide
                    className='toastStyle'
                    >
                    <Toast.Header>
                    <span className="loggedState iconify" data-icon="tabler:brand-react-native"></span>&nbsp;&nbsp;
                    <strong className="mr-auto">
                        Message
                    </strong>
                    <small style={{ marginLeft: '85px'}}>
                        Last Seen: 1 hour ago
                    </small>
                    </Toast.Header>
                    <Toast.Body className='toastBody'>
                    This message is from The Bootstrap-React component for Toasts.
                    This is an example Toast message.
                    </Toast.Body>
                </Toast>
                </ToastContainer>
            </div>
        );
}


export default BsToast;





