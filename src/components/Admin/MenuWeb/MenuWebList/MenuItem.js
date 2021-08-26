import React from 'react';
import { Button, List, Switch } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const MenuItem = ({ item, activateMenu }) => {
   const handledActivate = (e) => {
      activateMenu(item, e);
   };

   return (
      <List.Item
         actions={[
            //
            <Switch
               //
               defaultChecked={item.active}
               onChange={handledActivate}
            />,
            <Button type='primary'>
               <EditOutlined />
            </Button>,
            <Button type='danger'>
               <DeleteOutlined />
            </Button>,
         ]}
      >
         <List.Item.Meta title={item.title} description={item.url} />
      </List.Item>
   );
};
