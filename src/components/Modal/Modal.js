import React from 'react';
import { Modal as ModalAntd } from 'antd';

const Modal = ({ childrenm, title, isVisible, setIsVisible }) => {
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
         {childrenm}
      </ModalAntd>
   );
};

export default Modal;
