import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { signIn } from 'api/user';
import { emailValidation, minLengthValidation } from 'utils/formValidation';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'utils/constant';

import './LoginForm.scss';

const LoginForm = () => {
   const style = {
      color: 'rgba(0,0,0,0.25)',
   };

   const [inputs, setInputs] = useState({
      email: '',
      password: '',
   });

   //    estado para la validación de los formularios
   const [formValid, setFormValid] = useState({
      email: false,
      password: false,
   });

   const changeForm = (e) => {
      setInputs({
         ...inputs,
         [e.target.name]: e.target.value,
      });
   };

   //    función para la validación del formulario
   const inputValidation = ({ target }) => {
      const { type, name } = target;

      if (type === 'email') {
         setFormValid({
            ...formValid,
            [name]: emailValidation(target),
         });
      }

      if (type === 'password') {
         setFormValid({
            ...formValid,
            [name]: minLengthValidation(target, 6),
         });
      }
   };

   const login = async (e) => {
      e.preventDefault();

      const passwordVal = inputs.password;
      const emailVal = inputs.email;

      //   validamos que todos los campos estén llenos
      if (!emailVal || !passwordVal) {
         notification['error']({
            message: 'Todos los campos son obligatorios',
         });
      } else {
         //   función para el login
         const result = await signIn(inputs);
         if (result.msg) {
            notification['error']({
               message: result.msg,
            });
         } else {
            const { accessToken, refreshToken } = result;

            // guardamos ambos token obtenidos en localStorage
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);

            notification['success']({
               message: 'Login correcto',
            });

            // reseteamos el formulario
            resetForm();

            // redireccionamos
            window.location.href = '/admin';
         }
      }
   };

   //    limpiar los campos del formulario si todo es exitoso
   const resetForm = () => {
      const inputs = document.getElementsByTagName('input');

      for (let i = 0; i < inputs.length; i++) {
         inputs[i].classList.remove('success');
         inputs[i].classList.remove('error');
      }

      setInputs({
         email: '',
         password: '',
      });

      setFormValid({
         email: false,
         password: false,
      });
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
               onChange={inputValidation}
               value={inputs.email}
            />
         </Form.Item>

         <Form.Item>
            <Input
               prefix={<LockOutlined className='login-form__icon-input' style={style} />}
               type='password' //
               name='password'
               placeholder='Contraseña'
               className='login-form__input'
               onChange={inputValidation}
               value={inputs.password}
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
