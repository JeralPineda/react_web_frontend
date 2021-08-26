import React from 'react';
import { Button, List, Switch } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const MenuItem = ({ item }) => {
   return (
      <List.Item
         actions={[
            //
            <Switch defaultChecked={item.active} />,
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
