import { ILogin } from '@/services/auth/api';
import { authActions, authSelectors } from '@/store/auth';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input } from 'antd';

type TFieldType = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(authSelectors.loadingLogin);

  const onFinish = (values: ILogin) => {
    dispatch(authActions.loginRequest(values));
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        email: '',
        password: '',
      }}
      onFinish={onFinish}
      autoComplete='off'
    >
      <Form.Item<TFieldType>
        label='email'
        name='email'
        rules={[
          { required: true, message: 'Please input your email!' },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<TFieldType>
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Button type='default' htmlType='submit' block loading={loading}>
        Submit
      </Button>
    </Form>
  );
};

export { Login };
