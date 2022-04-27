import React from "react";
import { Row, Col, Form, Input, Button, Divider, Typography } from "antd";
import "./loginpage.css";
import { UserOutlined } from "@ant-design/icons";

import imageData from "../../assets/images/right-img.png";
import googleImage from "../../assets/images/icons/GoogleIcon.png";
import userImage from "../../assets/images/icons/UserIcon.png";
import passwordImage from "../../assets/images/icons/passwordIcon.png";
import rightArrowImage from "../../assets/images/icons/RightArrowIcon.png";
import { useHistory } from "react-router";
import * as localStorageService from "../../services/localStorageService";
import {LocalStorageKeys} from "../../../loginConstants";
const { Text } = Typography;
const LoginPage = () => {
  const history=useHistory();
  const onFinish = values => {
    localStorageService.SetItem(LocalStorageKeys.UserName,values.username);
    setTimeout(function(){
      debugger;
      history.push("/dashboard");
    },500);
    
    console.log("Success:", values);

  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className='wrapper'>
      <Row>
        <Col xs={24} sm={24} md={12} lg={10}>
          <div className='form-block'>
            <div className='w-100 text-center login-header'>
              <p className='login-header-title'>Welcome back!</p>
              <p className='login-header-subtitle'>Please sign in to continue with your tasks</p>
            </div>

            <Form
              name='basic'
              wrapperCol={{
                span: 24
              }}
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'>
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]}>
                <Input placeholder='Username' className='form-control' suffix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]}>
                <Input.Password placeholder='Password' className='form-control' />
              </Form.Item>
              <div style={{ marginBottom: "30px" }} className='form-group d-md-flex'>
                <div className='w-100 text-right'>
                  <a className='btnForgotLink'>Forgot Password</a>
                </div>
              </div>

              <Form.Item
                wrapperCol={{
                  span: 24
                }}>
                <Button type='primary' className='signinbtn' htmlType='submit'>
                  Sign In
                  <img style={{ marginLeft: "10px" }} src={rightArrowImage} />
                </Button>
              </Form.Item>

              <Divider>
                <Text type='secondary'>OR</Text>{" "}
              </Divider>

              <Form.Item
                wrapperCol={{
                  span: 24
                }}>
                <Button type='primary' className='googlebtn' htmlType='submit'>
                  <img src={googleImage} className='icon google-icon' /> Continue with Google
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={14}>
          <div className='image-area'>
            <img src={imageData} style={{ width: "100%", height: "100%", verticalAlign: "middle" }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
