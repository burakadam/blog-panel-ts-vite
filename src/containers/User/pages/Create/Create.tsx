import { Title } from '@/components/Title';
import { ROUTES } from '@/constants/routes';
import { TUserValues } from '@/models/user';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input, Select, Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userCreateActions, userCreateSelectors } from '.';

const Create = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const roleList = useAppSelector(userCreateSelectors.roleList);
  const isSuccess = useAppSelector(userCreateSelectors.isSuccess);
  const isLoading = useAppSelector(userCreateSelectors.isLoading);

  const onFinish = (values: TUserValues) => {
    dispatch(userCreateActions.postUserRequest(values));
  };

  useEffect(() => {
    dispatch(userCreateActions.getRoleListRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.USER_LIST);
    return () => {
      dispatch(userCreateActions.resetState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Spin spinning={isLoading}>
      <Title text='Create User' />
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label='Email'
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
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          {/* THERE SHOULD BE SOME RULES */}
          <Input.Password />
        </Form.Item>
        <Form.Item
          label='Full Name'
          name='fullName'
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Role'
          name='role'
          rules={[{ required: true, message: 'Please select a role!' }]}
        >
          <Select>
            {roleList.map((role) => (
              <Select.Option key={role._id} value={role._id}>
                {role.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button htmlType='submit'>Create User</Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export { Create };
