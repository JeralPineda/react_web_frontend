import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { emailValidation, minLengthValidation } from 'utils/formValidation';
import { signUpApi } from 'api/user';

import './RegisterForm.scss';

const RegisterForm = () => {
   const style = {
      color: 'rgba(0,0,0,0.25)',
   };

   const [inputs, setInputs] = useState({
      email: '',
      password: '',
      repeatPassword: '',
      privacyPolicy: false,
   });

   const [formValid, setFormValid] = useState({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
   });

   const changeForm = (e) => {
      //   diferenciar si es input o checkboxes
      if (e.target.name === 'privacyPolicy') {
         setInputs({
            ...inputs,
            [e.target.name]: e.target.checked,
         });
      } else {
         setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
         });
      }
   };

   const inputVlidation = ({ target }) => {
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

      if (type === 'checkbox') {
         setFormValid({
            ...formValid,
            [name]: target.checked,
         });
      }
   };

   const register = (e) => {
      e.preventDefault();

      //   const { email, password, repeatPassword, privacyPolicy } = formValid;

      const emailValue = inputs.email;
      const passwordValue = inputs.password;
      const repeatPasswordValue = inputs.repeatPassword;
      const privacyPolicyValue = inputs.privacyPolicy;

      if (!emailValue || !passwordValue || !repeatPasswordValue || !privacyPolicyValue) {
         notification['error']({
            message: 'Todos los campos son obligatorios',
         });
      } else {
         if (passwordValue !== repeatPasswordValue) {
            notification['error']({
               message: 'Las contraseñas tienen que ser iguales',
            });
         } else {
            //    TODO: conectar con el API y registrar el usuario
            const result = signUpApi(inputs);
         }
      }
   };

   return (
      <Form className='register-form' onChange={changeForm} onSubmitCapture={register}>
         <Form.Item>
            <Input
               prefix={<UserOutlined className='login-form__icon-input' style={style} />}
               type='email' //
               name='email'
               placeholder='Correo'
               className='register-form__input'
               onChange={inputVlidation}
               value={inputs.email}
            />
         </Form.Item>

         <Form.Item>
            <Input
               prefix={<LockOutlined className='login-form__icon-input' style={style} />}
               type='password' //
               name='password'
               placeholder='Contraseña'
               className='register-form__input'
               onChange={inputVlidation}
               value={inputs.password}
            />
         </Form.Item>

         <Form.Item>
            <Input
               prefix={<LockOutlined className='login-form__icon-input' style={style} />}
               type='password' //
               name='repeatPassword'
               placeholder='Repetir contraseña'
               className='register-form__input'
               onChange={inputVlidation}
               value={inputs.repeatPassword}
            />
         </Form.Item>

         <Form.Item>
            <Checkbox
               name='privacyPolicy' //
               onChange={inputVlidation}
               checked={inputs.privacyPolicy}
            >
               He leído y acepto las políticas de privacidad.
            </Checkbox>
         </Form.Item>

         <Form.Item>
            <Button
               htmlType='submit' //
               className='register-form__button'
            >
               Crear cuenta
            </Button>
         </Form.Item>
      </Form>
   );
};

export default RegisterForm;
