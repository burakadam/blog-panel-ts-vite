import { useAppDispatch } from '@/store/hooks';
import { Button, Form, Input } from 'antd';
import { blogListActions } from './slice';

const BlogFilter = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = (values: { search: string }) => {
    if (values.search) dispatch(blogListActions.setSearch(values));
  };

  const handleClear = () => {
    dispatch(blogListActions.setSearch({ search: undefined }));
    form.resetFields();
  };

  return (
    <Form form={form} layout='inline' onFinish={onFinish}>
      <Form.Item name='search' label='Title'>
        <Input placeholder='Enter title' />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit'>Search</Button>
        <Button onClick={handleClear} className='ml-2'>
          Clear
        </Button>
      </Form.Item>
    </Form>
  );
};

export { BlogFilter };
