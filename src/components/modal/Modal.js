import { useEffect} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, children }) => {
  const handleKeydown = (e) => {
    if(e.code === "Escape") {
      toggleModal();
    }
  };
  
  const handleClickBackdrop = (e) => {
    if(e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
    window.removeEventListener("keydown", handleKeydown);
    }
  });


  return createPortal(
    <div className={styles.overlay} onClick={handleClickBackdrop}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot,
    );
  };

  Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  export default Modal;