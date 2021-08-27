import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { FontSizeOutlined } from '@ant-design/icons';

export const AddForm = ({ menuWebData, setMenuWebData, addMenu }) => {
   const { Option } = Select;

   const selectBefore = (
      <Select
         //
         placeholder='Elija'
         style={{ width: 90 }}
         onChange={(e) => setMenuWebData({ ...menuWebData, http: e })}
      >
         <Option value='http://'>http://</Option>
         <Option value='https://'>https://</Option>
      </Select>
   );

   return (
      <Form className='form-add' onFinish={addMenu}>
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
               addonBefore={selectBefore}
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
               Crear menú
            </Button>
         </Form.Item>
      </Form>
   );
};
