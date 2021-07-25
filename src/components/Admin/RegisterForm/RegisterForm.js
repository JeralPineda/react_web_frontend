import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { emailValidation, minLengthValidation } from 'utils/formValidation';

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
      console.log(formValid);
   };

   return (
      <Form className='register-form' onChange={changeForm} onSubmitCapture={register}>
         <Form.Item>
            <Input
               prefix={<UserOutlined style={style} />}
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
               prefix={<LockOutlined style={style} />}
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
               prefix={<LockOutlined style={style} />}
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
               He leído y acepto las politicas de privacidad.
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
