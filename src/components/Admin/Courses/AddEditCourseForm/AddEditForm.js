import React from 'react';
import { Form, Input, Button } from 'antd';
import { DollarOutlined, GiftOutlined, KeyOutlined, LinkOutlined } from '@ant-design/icons';

export const AddEditForm = ({ course }) => {
   return (
      <Form className='form-add-edit' onFinish={() => console.log('Sumbit form')}>
         <Form.Item>
            <Input
               //
               prefix={<KeyOutlined />}
               placeholder='Id del curso'
               //    value={}
               // onChange={}
               disabled={course ? true : false}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               prefix={<GiftOutlined />}
               placeholder='Cupon de descuento'
               //    value={}
               // onChange={}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               prefix={<LinkOutlined />}
               placeholder='Url del curso'
               //    value={}
               // onChange={}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               prefix={<DollarOutlined />}
               placeholder='Precio del curso'
               //    value={}
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
               {course ? 'Actualizar curso' : 'Crear curso'}{' '}
            </Button>
         </Form.Item>
      </Form>
   );
};
