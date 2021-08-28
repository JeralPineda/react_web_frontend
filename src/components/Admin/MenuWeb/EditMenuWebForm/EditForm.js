import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons';

export const EditForm = ({ menuWebData, setMenuWebData, editMenu, menu }) => {
   return (
      <Form className='form-edit'>
         <Form.Item>
            <Input
               //
               prefix={<FontSizeOutlined />}
               placeholder='Titulo'
               //   value={}
               // onChange={}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               prefix={<LinkOutlined />}
               placeholder='URL'
               //   value={}
               // onChange={}
            />
         </Form.Item>

         <Form.Item>
            <Button
               //
               type='primary'
               htmlType='submit'
               className='btn-submit'
            >
               Actualizar menús
            </Button>
         </Form.Item>
      </Form>
   );
};
