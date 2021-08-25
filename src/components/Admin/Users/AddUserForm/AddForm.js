import React from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

export const AddForm = ({ userData, setUserData, addUser }) => {
   const { Option } = Select;

   return (
      <Form className='form-add' onFinish={addUser}>
         <Row gutter={24}>
            <Col span={12}>
               <Form.Item>
                  <Input
                     //
                     prefix={<UserOutlined />}
                     placeholder='Nombre'
                     value={userData.name}
                     onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  />
               </Form.Item>
            </Col>
            <Col span={12}>
               <Form.Item>
                  <Input
                     //
                     prefix={<UserOutlined />}
                     placeholder='Apellidos'
                     value={userData.lastName}
                     onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  />
               </Form.Item>
            </Col>
         </Row>

         <Row gutter={24}>
            <Col span={12}>
               <Form.Item>
                  <Input
                     //
                     prefix={<MailOutlined />}
                     placeholder='Correo'
                     value={userData.email}
                     onChange={({ target }) => setUserData({ ...userData, email: target.value })}
                  />
               </Form.Item>
            </Col>
            <Col span={12}>
               <Form.Item>
                  <Select //
                     placeholder='Seleccióna una rol'
                     onChange={(e) => setUserData({ ...userData, role: e })}
                     value={userData.role}
                  >
                     <Option value='admin'>Administrador</Option>
                     <Option value='editor'>Editor</Option>
                     <Option value='reviewr'>Revisor</Option>
                  </Select>
               </Form.Item>
            </Col>
         </Row>

         <Row gutter={24}>
            <Col span={12}>
               <Form.Item>
                  <Input //
                     prefix={<LockOutlined />}
                     type='password'
                     placeholder='Contraseña'
                     value={userData.password}
                     onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  />
               </Form.Item>
            </Col>

            <Col span={12}>
               <Form.Item>
                  <Input //
                     prefix={<LockOutlined />}
                     type='password'
                     placeholder='Repetir contraseña'
                     value={userData.repeatPassword}
                     onChange={(e) => setUserData({ ...userData, repeatPassword: e.target.value })}
                  />
               </Form.Item>
            </Col>
         </Row>

         <Form.Item>
            <Button type='primary' htmlType='submit' className='btn-submit'>
               Crear Usuario
            </Button>
         </Form.Item>
      </Form>
   );
};
