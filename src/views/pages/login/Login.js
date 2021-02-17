import React from 'react';
import './login.scss';
import { Form, Icon, Input, Button, Row, Typography } from 'antd';
import loginBackground from './miliki-bg.png';

const { Title } = Typography;

class LogIn extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, { username, password }) => {
      if (!err) {
        console.log('logged in!!')
      }
    });
  };

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
              {getFieldDecorator('username', {
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
                  Proceed
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

export default Form.create({ name: 'normal_login' })(LogIn);
const loginStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: '100%',
  backgroundSize: 'cover',
  height: '100vh',
  backgroundImage: `url(${loginBackground})`
};
