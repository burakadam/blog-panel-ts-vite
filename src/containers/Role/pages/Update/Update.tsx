import { Title } from '@/components/Title';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input, Select, Spin } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { roleUpdateActions, roleUpdateSelectors } from '.';

const Update = () => {
  const [form] = Form.useForm();
  const { roleId } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(roleUpdateSelectors.isLoading);
  const permissionList = useAppSelector(roleUpdateSelectors.permissionList);
  const roleData = useAppSelector(roleUpdateSelectors.roleData);

  console.log('roleData', roleData);

  const onFinish = () => {};

  useEffect(() => {
    if (roleId)
      dispatch(roleUpdateActions.getRoleDetailRequest({ _id: roleId }));
  }, [dispatch, roleId]);

  return (
    <Spin spinning={isLoading}>
      <Title text='Update Role' />
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        form={form}
        fields={[
          { name: 'name', value: roleData?.name || '' },
          { name: 'permissions', value: roleData?.permissions },
        ]}
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

export { Update };
