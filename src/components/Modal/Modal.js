import React from 'react';
import { Modal as ModalAntd } from 'antd';

const Modal = ({ children, title, isVisible, setIsVisible, ...other }) => {
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
         {...other}
      >
         {children}
      </ModalAntd>
   );
};

export default Modal;
