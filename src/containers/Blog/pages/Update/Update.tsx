import { TagsInput } from '@/components/Form';
import { TextEditor } from '@/components/TextEditor';
import { TBlogValues } from '@/models/blog';
import { ICategory } from '@/models/category';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Form, Input, Select, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogUpdateActions, blogUpdateSelectors } from '.';

const { Option } = Select;

// NEEDED TO FIND BETTER WAY TO HANDLE POSTER

const Update = () => {
  const { blogId } = useParams();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const blogData = useAppSelector(blogUpdateSelectors.blog);
  const categories = useAppSelector(blogUpdateSelectors.categories);
  const isLoading = useAppSelector(blogUpdateSelectors.isLoading);

  const [selectedImage, setSelectedImage] = useState<unknown>(null);

  useEffect(() => {
    dispatch(blogUpdateActions.getDetailRequest({ _id: blogId as string }));
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedImage(file);
  };

  const onFinish = async (values: TBlogValues) => {
    console.log('values', selectedImage);
  };

  useEffect(() => {
    if (blogData) setSelectedImage(blogData.poster);
  }, [blogData]);

  if (!blogData) return;

  return (
    <Spin spinning={isLoading}>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        name='Blog'
        fields={[
          { name: 'title', value: blogData?.title || '' },
          { name: 'content', value: blogData?.content },
          { name: 'tags', value: blogData?.tags },
          { name: 'category', value: blogData?.category },
        ]}
      >
        <Form.Item
          label='Title'
          name='title'
          rules={[{ required: true, message: 'Please enter the title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label='Poster'>
          <Input type='file' onChange={handleImageChange} accept='image/*' />
          {selectedImage && (
            <div className='mt-4 w-full h-40 overflow-hidden'>
              <img
                src={
                  typeof selectedImage === 'string'
                    ? selectedImage
                    : URL.createObjectURL(selectedImage)
                }
                alt='Selected Image Preview'
                className='w-full h-full object-cover'
              />
            </div>
          )}
        </Form.Item>
        <Form.Item label='Content' name='content' rules={[{ required: true }]}>
          <TextEditor initialEditorState={blogData?.content || null} />
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
            {categories.map((item: ICategory) => (
              <Option value={item._id} key={item._id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button htmlType='submit'>Update Blog Post</Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export { Update };
