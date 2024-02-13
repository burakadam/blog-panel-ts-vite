import { Title } from '@/components/Title';
import { ROUTES } from '@/constants/routes';
import { TRoleValues } from '@/models/role';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input, Select, Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { roleCreateActions } from '.';
import { roleCreateSelectors } from './selectors';

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(roleCreateSelectors.isLoading);
  const permissionList = useAppSelector(roleCreateSelectors.permissionList);
  const isSuccess = useAppSelector(roleCreateSelectors.isSuccess);

  const onFinish = (values: TRoleValues) => {
    dispatch(roleCreateActions.postRoleRequest(values));
  };

  useEffect(() => {
    dispatch(roleCreateActions.getPermissionListRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.ROLE_LIST);
    return () => {
      dispatch(roleCreateActions.resetState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Spin spinning={isLoading}>
      <Title text='Create Role' />
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Permissions'
          name='permissions'
          rules={[{ required: true, message: 'Please select a permissions!' }]}
        >
          <Select mode='multiple' placeholder='Select permissions'>
            {permissionList.map((permission) => (
              <Select.Option key={permission.id} value={permission.id}>
                {permission.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export { Create };
