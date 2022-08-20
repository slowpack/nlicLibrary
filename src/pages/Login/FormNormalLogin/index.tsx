import React, { useEffect } from 'react';
import styles from './index.less';
// import { history } from '@umijs/max';
import { useNavigate } from '@umijs/max';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useLogin } from '@/models/login';
import { message } from 'antd';
const NormalLoginForm = () => {
  const navigate = useNavigate();
  const haveLogin = useLogin(state => state.haveLogin);
  const login = useLogin(state => state.login);
  const tips = () => {
    message.info('账号是:admin,密码是:1');
  };
  const onFinish = (values: any) => {
    console.log('得到数据: ', values);
    if (values.username === 'admin' && values.password === '1') {
      // history.push('/home');
      navigate('/home');
      login();
    } else {
      tips();
    }
  };

  useEffect(() => {
    if (haveLogin) {
      // history.push('/home');
      navigate('/home');
    }
  }, []);

  return (
    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true, message: '填admin' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '密码是1' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        或者 <a href="">注册</a>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-normal-login">
      <NormalLoginForm />
    </div>
  </div>
);
