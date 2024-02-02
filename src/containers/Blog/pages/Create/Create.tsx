import { TagsInput } from '@/components/Form';
import { TextEditor } from '@/components/TextEditor';
import { ROUTES } from '@/constants/routes';
import { TBlogValues } from '@/models/blog';
import { ICategory } from '@/models/category';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { InboxOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Spin, Upload } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogCreateSelectors } from '.';
import { blogCreateActions } from './slice';

const { Option } = Select;
const { Dragger } = Upload;

const Create = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(blogCreateSelectors.categoryList);
  const isLoading = useAppSelector(blogCreateSelectors.isLoading);
  const isSuccess = useAppSelector(blogCreateSelectors.isSuccess);

  const onFinish = async (values: TBlogValues) => {
    const formData = new FormData();
    formData.append('poster', values.poster[0]);
    formData.append('title', values.title);
    formData.append('content', values.content);
    if (values.tags) formData.append('tags', values.tags.join(','));
    formData.append('category', values.category);

    dispatch(blogCreateActions.postBlogRequest(formData));
  };

  useEffect(() => {
    dispatch(blogCreateActions.getCategoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.BLOG_LIST);
  }, [isSuccess, navigate]);

  return (
    <Spin spinning={isLoading}>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        name='Blog'
      >
        <Form.Item
          label='Title'
          name='title'
          rules={[{ required: true, message: 'Please enter the title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Poster'
          name='poster'
          valuePropName='fileList'
          rules={[{ required: true, message: 'Please select a poster' }]}
          getValueFromEvent={(e) =>
            e && e.fileList.length > 0 ? [e.fileList[0].originFileObj] : []
          }
        >
          <Dragger name='file' multiple={false} beforeUpload={() => false}>
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </Form.Item>
        <Form.Item label='Content' name='content' rules={[{ required: true }]}>
          <TextEditor />
        </Form.Item>
        <Form.Item label='Tags' name='tags'>
          <TagsInput form={form} name='tags' />
        </Form.Item>
        <Form.Item
          label='Category'
          name='category'
          rules={[{ required: true, message: 'Please select a category' }]}
        >
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
    </Spin>
  );
};

export { Create };
