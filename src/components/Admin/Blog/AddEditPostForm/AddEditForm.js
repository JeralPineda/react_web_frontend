import React from 'react';
import { Col, Row, Form, Input, Button, DatePicker } from 'antd';
import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Editor } from '@tinymce/tinymce-react';

export const AddEditForm = ({ postData, setPostData, post }) => {
   return (
      <Form
         //
         className='add-edit-post-form'
         layout={'inline'}
      >
         <Row gutter={24}>
            <Col span={8}>
               <Input
                  //
                  prefix={<FontSizeOutlined />}
                  placeholder='Titulo'
                  //   value={}
                  // onChange={}
               />
            </Col>

            <Col span={8}>
               <Input
                  //
                  prefix={<LinkOutlined />}
                  placeholder='url'
                  //   value={}
                  // onChange={}
               />
            </Col>

            <Col span={8}>
               <DatePicker
                  //
                  style={{ width: '100%' }}
                  format='DD/MM/YYYY HH:mm:ss'
                  placeholder='Fecha de publicacion'
                  //   value={}
                  // onChange={}
               />
            </Col>
         </Row>

         <Editor
            // onInit={(evt, editor) => (editorRef.current = editor)}
            // initialValue='<p>This is the initial content of the editor.</p>'
            value=''
            init={{
               height: 400,
               menubar: true,
               plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
               toolbar: 'undo redo | formatselect | ' + 'bold italic backcolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | help',
               content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
         />

         <Button type='primary' htmlType='submit' className='btn-submit'>
            {post ? 'Actualizar post' : 'Crear post'}
         </Button>
      </Form>
   );
};
