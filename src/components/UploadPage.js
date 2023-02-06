import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';


const UploadPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div id='upload-container'>
            <Form name='uploadForm' onFinish={onFinish}>
              <Form.Item>
                <img src="/images/icons/camera.png" alt=""/>
                <span>이미지를 업로드 해주세요</span>
              </Form.Item>

              <Form.Item name="username">
                <Input className='upload-name' placeholder='상품명을 입력해주세요' size='large'/>
              </Form.Item>
            </Form>
        </div>
    );
};

export default UploadPage;