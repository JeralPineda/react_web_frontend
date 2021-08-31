import React from 'react';
import { Card } from 'antd';

export const CardInfo = ({ icon, title, subtitle }) => {
   const { Meta } = Card;

   return (
      <Card className='how-my-courses-work__card'>
         {icon}
         <Meta title={title} description={subtitle} />
      </Card>
   );
};
