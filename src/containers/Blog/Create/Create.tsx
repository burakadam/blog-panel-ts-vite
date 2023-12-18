import { TextEditor } from '@/components/TextEditor';
import { useAppDispatch } from '@/store/hooks';
import { Button, Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import { blogCreateActions } from './slice';

const { Option } = Select;

const Create = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = async (values: unknown) => {
    console.log('values', values);
  };

  useEffect(() => {
    dispatch(blogCreateActions.getCategories());
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
          <Option value='category1'>Category 1</Option>
          <Option value='category2'>Category 2</Option>
          {/* Add more options as needed */}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button htmlType='submit'>Create Blog Post</Button>
      </Form.Item>
    </Form>
  );
};

export { Create };
