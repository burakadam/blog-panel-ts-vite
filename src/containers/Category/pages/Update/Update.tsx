import { TCategoryValues } from '@/models/category';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, FormInstance, Input, Spin } from 'antd';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { categoryUpdateActions, categoryUpdateSelectors } from '.';

const Update = () => {
  const form = useRef<FormInstance>(null);
  const { categoryId } = useParams();
  const dispatch = useAppDispatch();
  const categoryDetail = useAppSelector(categoryUpdateSelectors.category);
  const isLoading = useAppSelector(categoryUpdateSelectors.isLoading);
  const error = useAppSelector(categoryUpdateSelectors.error);

  useEffect(() => {
    dispatch(
      categoryUpdateActions.getDetailRequest({ _id: categoryId as string })
    );
  }, []);

  useEffect(() => {
    if (form.current) form.current?.setFieldsValue(categoryDetail);
  }, [categoryDetail]);

  const onFinish = (values: TCategoryValues) => {
    if (categoryId)
      dispatch(
        categoryUpdateActions.postCategoryRequest({
          _id: categoryId,
          ...values,
        })
      );
  };

  return (
    <Spin spinning={isLoading}>
      <Form onFinish={onFinish} layout='vertical' ref={form} disabled={!!error}>
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
        <Form.Item>
          <Button htmlType='submit'>Update Category</Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export { Update };
