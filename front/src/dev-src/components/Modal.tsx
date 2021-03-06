import React from 'react';

type ModalProps = {
  children?: any;
  isOpen: boolean;
  setIsOpen: any;
};

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div
      onClick={closeModal}
      className={isOpen ? 'modal show-modal' : 'modal close-modal'}
    >
      <div className="modal-dialog">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Settings
            </h5>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
