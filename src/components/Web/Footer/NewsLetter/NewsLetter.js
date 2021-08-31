import React from 'react';
import { Form, Button, notification, Input } from 'antd';

import './NewsLetter.scss';
import { UserOutlined } from '@ant-design/icons';

const NewsLetter = () => {
   const onSubmit = () => {
      console.log('newsletter enviado');
   };
   return (
      <div className='newsletter'>
         <h3>Newsletter</h3>
         <Form onFinish={onSubmit}>
            <Form.Item>
               <Input
                  //
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,0.25)' }} />}
                  placeholder='Correo electrónico'
                  //   value=''
                  //   onChange={}
               />
            </Form.Item>
            <Form.Item>
               <Button
                  //
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
               >
                  Me suscribo!
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default NewsLetter;
