import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { signIn } from 'api/user';

import './LoginForm.scss';

const LoginForm = () => {
   const style = {
      color: 'rgba(0,0,0,0.25)',
   };

   const [inputs, setInputs] = useState({
      email: '',
      password: '',
   });

   const changeForm = (e) => {
      setInputs({
         ...inputs,
         [e.target.name]: e.target.value,
      });
   };

   const login = (e) => {
      e.preventDefault();

      //   función para el login
      signIn(inputs);
   };

   return (
      <Form className='login-form' onChange={changeForm} onSubmitCapture={login}>
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
