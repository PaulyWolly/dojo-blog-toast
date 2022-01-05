/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ToastComponent from '../ToastComponent';

const Footer = () => {

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <nav className="footer">
        <footer className="footer">
            <div className="icon-container">
                {/* <a onClick={toggleShowA} title='toggle toast'><span title='toggle toast' className="iconify" data-icon="la:infinity"></span></a> */}
                <a onClick={toggleShowA} title='toggle toast'><span class="iconify" data-icon="twemoji:infinity"></span></a>

            </div>
        {/* <ToastComponent /> */}
        </footer>

    </nav>
  );
}

export default Footer;

// <div className="position">
//<ToastContainer  position='middle-center' >
//    <Toast
//        show={showA}
//        onClose={toggleShowA}
//        delay={5000}
//        autohide={true}
//        bg={'primary'} //'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'

//    >
//   <Toast.Header>
//        {/* <img
//        src="holder.js/20x20?text=%20"
//        className="rounded me-2"
//        alt=""
//        /> */}
//        <span className="loggedState iconify" data-icon="tabler:brand-react-native"></span>
//        <strong className="me-auto">&nbsp;&nbsp;&nbsp;Bootstrap</strong>
//        <small>11 mins ago</small>
//    </Toast.Header>
//    <Toast.Body className='toast-body'>
//        Woohoo, you're reading this text in a Toast!
//    </Toast.Body>
//    </Toast>
//</ToastContainer>
//</div>