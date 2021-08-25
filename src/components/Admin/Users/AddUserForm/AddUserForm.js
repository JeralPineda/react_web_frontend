import React from 'react';
import { Form, Input, Select, Button, Row, Col, notification } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

import { getAccessTokenApi } from 'api/auth';
import { signUpAdminApi } from 'api/user';

import './AddUserForm.scss';

const AddUserForm = ({ setIsVisibleModal, setReloadUsers }) => {
   return (
      <div>
         <h1>Hola mundo</h1>
      </div>
   );
};

export default AddUserForm;
