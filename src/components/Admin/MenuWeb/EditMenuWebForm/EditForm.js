import React from 'react';
import { Button, Form, Input } from 'antd';
import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons';

export const EditForm = ({ menuWebData, setMenuWebData, editMenu }) => {
   return (
      <Form className='form-edit' onFinish={editMenu}>
         <Form.Item>
            <Input
               //
               prefix={<FontSizeOutlined />}
               placeholder='Titulo'
               value={menuWebData.title}
               onChange={(e) => setMenuWebData({ ...menuWebData, title: e.target.value })}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               prefix={<LinkOutlined />}
               placeholder='URL'
               value={menuWebData.url}
               onChange={(e) => setMenuWebData({ ...menuWebData, url: e.target.value })}
            />
         </Form.Item>

         <Form.Item>
            <Button
               //
               type='primary'
               htmlType='submit'
               className='btn-submit'
            >
               Actualizar menú
            </Button>
         </Form.Item>
      </Form>
   );
};
