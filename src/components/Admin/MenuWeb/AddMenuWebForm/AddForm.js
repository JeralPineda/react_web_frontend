import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { FontSizeOutlined } from '@ant-design/icons';

export const AddForm = (props) => {
   const { Option } = Select;

   const selectBefore = (
      <Select
         //
         defaultValue='http://'
         style={{ width: 90 }}
         //  onChange={() => console.log('hola')}
      >
         <Option value='http://'>http://</Option>
         <Option value='https://'>https://</Option>
      </Select>
   );

   return (
      <Form className='form-add'>
         <Form.Item>
            <Input
               //
               prefix={<FontSizeOutlined />}
               placeholder='Titulo'
               value='Hola'
               //    onChange={() => console.log('hola')}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               addonBefore={selectBefore}
               placeholder='URL'
               value='url'
               //    onChange={() => console.log('hola')}
            />
         </Form.Item>

         <Form.Item>
            <Button
               //
               type='primary'
               htmlType='submit'
               className='btn-submit'
            >
               Crear menú
            </Button>
         </Form.Item>
      </Form>
   );
};
