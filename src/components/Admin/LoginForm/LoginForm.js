import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './LoginForm.scss';

const LoginForm = () => {
   const style = {
      color: 'rgba(0,0,0,0.25)',
   };

   return (
      <Form className='login-form'>
         <Form.Item>
            <Input
               //
               prefix={<UserOutlined className='login-form__icon-input' style={style} />}
               type='email' //
               name='email'
               placeholder='Correo'
               className='login-form__input'
               //    onChange={inputVlidation}
               //    value={inputs.email}
            />
         </Form.Item>

         <Form.Item>
            <Input
               prefix={<LockOutlined className='login-form__icon-input' style={style} />}
               type='password' //
               name='password'
               placeholder='Contraseña'
               className='login-form__input'
               //    onChange={inputVlidation}
               //    value={inputs.password}
            />
         </Form.Item>

         <Form.Item>
            <Button
               htmlType='submit' //
               className='login-form__button'
            >
               Entrar
            </Button>
         </Form.Item>
      </Form>
   );
};

export default LoginForm;
