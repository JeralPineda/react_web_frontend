import React from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './RegisterForm.scss';

const RegisterForm = () => {
   const style = {
      color: 'rgba(0,0,0,0.25)',
   };
   return (
      <Form className='register-form'>
         <Form.Item>
            <Input
               prefix={<UserOutlined style={style} />}
               type='email' //
               name='email'
               placeholder='Correo'
               className='register-form__input'
            />
         </Form.Item>

         <Form.Item>
            <Input
               prefix={<LockOutlined style={style} />}
               type='password' //
               name='password'
               placeholder='Contraseña'
               className='register-form__input'
            />
         </Form.Item>

         <Form.Item>
            <Input
               prefix={<LockOutlined style={style} />}
               type='password' //
               name='repeatPassword'
               placeholder='Repetir contraseña'
               className='register-form__input'
            />
         </Form.Item>

         <Form.Item>
            <Checkbox
               name='privacyPolicy' //
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
