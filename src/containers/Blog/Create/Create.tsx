import { TextEditor } from '@/components/TextEditor';
import { ICategory } from '@/models/category';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import { blogCreateSelectors } from '.';
import { blogCreateActions } from './slice';

const { Option } = Select;

const Create = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(blogCreateSelectors.categoryList);

  const onFinish = async (values: unknown) => {
    console.log('values', values);
  };

  useEffect(() => {
    dispatch(blogCreateActions.getCategoriesRequest());
  }, []);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label='Title'
        name='title'
        rules={[{ required: true, message: 'Please enter the title' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label='Content' name='content' rules={[{ required: true }]}>
        <TextEditor />
      </Form.Item>
      <Form.Item label='Tags' name='tags'>
        <Input placeholder='Comma-separated' />
      </Form.Item>
      <Form.Item label='Category' name='category'>
        <Select>
          {categoryList.map((item: ICategory) => (
            <Option value={item._id} key={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button htmlType='submit'>Create Blog Post</Button>
      </Form.Item>
    </Form>
  );
};

export { Create };
