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

   const register = async (e) => {
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
               message: 'Las contrase??as tienen que ser iguales',
            });
         } else {
            //  conectar con el API y registrar el usuario
            const result = await signUpApi(inputs);
            if (!result.ok) {
               notification['error']({
                  message: result.message,
               });
            } else {
               notification['success']({
                  message: result.message,
               });

               //    Funci??n para resetear el formulario
               resetForm();
            }
         }
      }
   };

   const resetForm = () => {
      const inputs = document.getElementsByTagName('input');

      for (let i = 0; i < inputs.length; i++) {
         inputs[i].classList.remove('success');
         inputs[i].classList.remove('error');
      }

      setInputs({
         email: '',
         password: '',
         repeatPassword: '',
         privacyPolicy: false,
      });

      setFormValid({
         email: false,
         password: false,
         repeatPassword: false,
         privacyPolicy: false,
      });
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
               placeholder='Contrase??a'
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
               placeholder='Repetir contrase??a'
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
               He le??do y acepto las pol??ticas de privacidad.
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
