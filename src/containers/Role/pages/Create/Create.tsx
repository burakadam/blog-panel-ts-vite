import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input, Select, Spin } from 'antd';
import { useEffect } from 'react';
import { roleCreateActions } from '.';
import { roleCreateSelectors } from './selectors';

const Create = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(roleCreateSelectors.isLoading);
  const permissionList = useAppSelector(roleCreateSelectors.permissionList);

  useEffect(() => {
    dispatch(roleCreateActions.getPermissionListRequest());
  }, [dispatch]);

  const onFinishForm = (values: unknown) => {
    console.log(values);
  };

  return (
    <Spin spinning={isLoading}>
      <Form onFinish={onFinishForm}>
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
        <Form.Item>
          <Button htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export { Create };
