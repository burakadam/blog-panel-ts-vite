import { Title } from '@/components/Title';
import { ROUTES } from '@/constants/routes';
import { TCategoryValues } from '@/models/category';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input, Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryCreateSelectors } from '.';
import { categoryCreateActions } from './slice';

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSuccess = useAppSelector(categoryCreateSelectors.isSuccess);
  const isLoading = useAppSelector(categoryCreateSelectors.isLoading);

  const onFinish = (values: TCategoryValues) => {
    dispatch(categoryCreateActions.postCategoryRequest(values));
  };

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.CATEGORY_LIST);
    return () => {
      dispatch(categoryCreateActions.resetState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Spin spinning={isLoading}>
      <Title text='Create Category' />
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please enter the name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Description'
          name='description'
          rules={[{ required: true, message: 'Please enter the description' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button htmlType='submit'>Create Category</Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export { Create };
