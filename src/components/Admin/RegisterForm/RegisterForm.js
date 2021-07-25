import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

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

   const register = (e) => {
      e.preventDefault();
      console.log(inputs);
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
               value={inputs.repeatPassword}
            />
         </Form.Item>

         <Form.Item>
            <Checkbox
               name='privacyPolicy' //
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
