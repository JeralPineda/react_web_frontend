import React from 'react';

import AcademyLogo from '../../../../assets/img/png/academy-logo.png';

import './PresentationCourses.scss';

const PresentationCourses = () => {
   return (
      <div className='presentation-courses'>
         <img src={AcademyLogo} alt='Cursos' />
         <p>En Agustin Navarro Academy vas a encontrar los mejores cursos online de desarrollo web en Español. Unete a nosotros y empieza tu camino como Desarrollador Web o Desarrollador de CMS. Sinceramente, estos cursos es el tipo de contenido que a mi me hubiera gustado encontrar cuando empece en el mundo del desarrollo web profesional.</p>
         <p>Echa un vistazo y aprovecha las ofertas!!!</p>
      </div>
   );
};

export default PresentationCourses;
