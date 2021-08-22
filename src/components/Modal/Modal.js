import React from 'react';
import { Modal as ModalAntd } from 'antd';

const Modal = ({ children, title, isVisible, setIsVisible }) => {
   const modalCancel = () => {
      setIsVisible(false);
   };
   return (
      <ModalAntd
         //
         title={title}
         centered
         visible={isVisible}
         onCancel={modalCancel}
         footer={false}
      >
         {children}
      </ModalAntd>
   );
};

export default Modal;
