import React from 'react'
import axios from 'axios';
import history from '../../../helpers/routeUtils';

import { Form, Icon, Input, Button, Row, Typography } from 'antd';


const { Title } = Typography;
let signupResponse;

class Register extends React.Component {
  handleSubmit =  (event) => {
    event.preventDefault();
      this.props.form.validateFields( async(err, { email, username,twitterUsername,twitterPassword, password }) => {
        if (!err) {

          try {
            signupResponse = await axios
            .post(
              `https://pacific-castle-48199.herokuapp.com/https://tunde.herokuapp.com/api/v1/register/`,
              {
                email,
                username,
                password,
                twitterUsername,
                twitterPassword
              },
            );
            history.push('/');
            console.log(signupResponse);
          } catch (error) {
            console.log('unable to register');
          }
          
        }
      });
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container" id="login">
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={({ minHeight: '100vh' }, loginStyle)}
        >
          <Form onSubmit={this.handleSubmit} className="login-form" layout="vertical">
            {/* <img
              src="logos/miliki-logo-small.png"
              alt="miliki-logo"
              className="login-logo"
            /> */}
            <div className="page-titles">
              <Title level={3}>Login</Title>
              <Title level={4}>Kindly enter username and password to login</Title>
            </div>
            <Form.Item label="Email Address">
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Please enter your email' },
                  {
                    type: 'email',
                    message: 'oops! looks like you\'ve entered an invalid email'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                  }
                  type="email"
                  placeholder="person@company.com"
                  className="textfield"
                  autoFocus
                />
              )}
            </Form.Item>
            <Form.Item label="User Name">
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please enter your username' },
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                  }
                  placeholder="username"
                  className="textfield"
                  autoFocus
                />
              )}
            </Form.Item>
            <Form.Item label="Twitter Username">
              {getFieldDecorator('twitterUsername', {
                rules: [
                  { required: true, message: 'Please enter your twitterUsername' },
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                  }
                  placeholder="username"
                  className="textfield"
                  autoFocus
                />
              )}
            </Form.Item>
            <Form.Item label="Twitter Password">
              {getFieldDecorator('twitterPassword', {
                rules: [
                  { required: true, message: 'Please enter your twitterPassword' },
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                  }
                  placeholder="username"
                  className="textfield"
                  autoFocus
                />
              )}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please enter your Password' }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>
                  }
                  type="password"
                  placeholder="Password"
                  className="textfield"
                />
              )}
            </Form.Item>
            <Form.Item>
              <div className="forgot-change">
                <a className="Not-Registered" href="./register">
                  Not yet Registered,register here 
                </a>
                <a className="login-form-forgot" href="#">
                  Forgot password
                </a>
                <a className="login-form-forgot" href="#">
                  Change password
                </a>
              </div>
              <Row type="flex" justify="center" align="middle">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="textfield"
                >
                 Register
                </Button>
              </Row>
              <div className="contact-us">
                <a href="#">Contact Us</a>
              </div>
            </Form.Item>
          </Form>
        </Row>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_register' })(Register);
const loginStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: '100%',
  backgroundSize: 'cover',
  height: '100vh',
};