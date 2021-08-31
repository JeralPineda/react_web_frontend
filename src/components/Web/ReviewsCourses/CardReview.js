import React from 'react';
import { Card, Avatar } from 'antd';

export const CardReview = ({ name, subtitle, avatar, review }) => {
   const { Meta } = Card;

   return (
      <Card className='reviews-courses__card'>
         <p>{review}</p>
         <Meta
            //

            avatar={<Avatar src={avatar} />}
            title={name}
            description={subtitle}
         />
      </Card>
   );
};
