import React from 'react';
import { Button, Card } from 'antd';

export const CardCourse = ({ image, title, subtitle, link }) => {
   const { Meta } = Card;

   return (
      <a href={link} target='_blank' rel='noopener noreferrer'>
         <Card
            //
            hoverable
            className='home-courses__card'
            cover={<img src={image} alt={title} />}
            actions={[<Button>Ingresar</Button>]}
         >
            <Meta title={title} description={subtitle} />
         </Card>
      </a>
   );
};
