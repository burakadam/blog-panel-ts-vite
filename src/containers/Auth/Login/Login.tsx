import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: unknown) => {
  console.log('Success:', values);
};

type TFieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete='off'
    >
      <Form.Item<TFieldType>
        label='Username'
        name='username'
        rules={[
          { required: true, message: 'Please input your username!' },
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
      <Form.Item<TFieldType>
        name='remember'
        valuePropName='checked'
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Button type='default' htmlType='submit' block>
        Submit
      </Button>
    </Form>
  );
};

export { Login };
