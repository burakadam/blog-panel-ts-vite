import { Title } from '@/components/Title';
import { ROUTES } from '@/constants/routes';
import { IRole, TRoleValues } from '@/models/role';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input, Select, Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { roleUpdateActions, roleUpdateSelectors } from '.';

const Update = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { roleId } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(roleUpdateSelectors.isLoading);
  const permissionList = useAppSelector(roleUpdateSelectors.permissionList);
  const roleData = useAppSelector(roleUpdateSelectors.roleData);
  const isSuccess = useAppSelector(roleUpdateSelectors.isSuccess);

  const onFinish = (values: TRoleValues) => {
    const roleObj = { _id: roleId, ...values } as IRole;
    console.log(roleObj);
    dispatch(roleUpdateActions.postBlogUpdateRequest(roleObj));
  };

  useEffect(() => {
    if (roleId)
      dispatch(roleUpdateActions.getRoleDetailRequest({ _id: roleId }));
  }, [dispatch, roleId]);

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.ROLE_LIST);
    return () => {
      dispatch(roleUpdateActions.resetState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

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
