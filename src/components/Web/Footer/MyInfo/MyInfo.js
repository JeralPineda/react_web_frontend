import SocialLinks from 'components/Web/SocialLinks';
import React from 'react';

import Logo from '../../../../assets/img/png/logo192.png';
import './MyInfo.scss';

const MyInfo = () => {
   return (
      <div className='my-info'>
         <img src={Logo} alt='Jeral Pineda' />
         <h4>Entra en el mundo del desarrollo web , disfruta creando proyectos de todo tipo, deja que tu imaginación fluya y crea verdaderas maravillas.</h4>

         <SocialLinks />
      </div>
   );
};

export default MyInfo;
