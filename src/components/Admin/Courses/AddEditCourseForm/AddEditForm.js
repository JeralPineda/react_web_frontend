import React from 'react';
import { Form, Input, Button } from 'antd';
import { DollarOutlined, GiftOutlined, KeyOutlined, LinkOutlined } from '@ant-design/icons';

export const AddEditForm = ({ course, addCourse, updateCourse, courseData, setCourseData }) => {
   return (
      <Form className='form-add-edit' onFinish={course ? updateCourse : addCourse}>
         <Form.Item>
            <Input
               //
               prefix={<KeyOutlined />}
               placeholder='Id del curso'
               value={courseData.idCourser}
               onChange={(e) => setCourseData({ ...courseData, idCourse: e.target.value })}
               disabled={course ? true : false}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               prefix={<LinkOutlined />}
               placeholder='Url del curso'
               value={courseData.link}
               onChange={(e) => setCourseData({ ...courseData, link: e.target.value })}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               prefix={<GiftOutlined />}
               placeholder='Cupon de descuento'
               value={courseData.cupon}
               onChange={(e) => setCourseData({ ...courseData, cupon: e.target.value })}
            />
         </Form.Item>

         <Form.Item>
            <Input
               //
               prefix={<DollarOutlined />}
               placeholder='Precio del curso'
               value={courseData.price}
               onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
            />
         </Form.Item>

         <Form.Item>
            <Button
               //
               type='primary'
               htmlType='submit'
               className='btn-submit'
            >
               {course ? 'Actualizar curso' : 'Crear curso'}{' '}
            </Button>
         </Form.Item>
      </Form>
   );
};
