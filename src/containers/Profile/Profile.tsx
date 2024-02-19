import { Button, Form, Input, Spin } from 'antd';
import { useEffect, useState } from 'react';

import DUMMY from '@/assets/dummy-profile-pic.png';
import { TUserProfileValues } from '@/models/user';
import { authActions, authSelectors } from '@/store/auth';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState<File | string | null>(
    null
  );
  const user = useAppSelector(authSelectors.user);
  const isLoading = useAppSelector(authSelectors.loadingUserProfile);

  useEffect(() => {
    if ('profilePicture' in user)
      setSelectedImage(user.profilePicture as unknown as string);
  }, [user]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedImage(file);
  };

  const onFinish = (values: TUserProfileValues) => {
    if ('_id' in user && selectedImage) {
      const formData = new FormData();
      formData.append('profilePicture', selectedImage as File);
      formData.append('_id', user._id as string);
      formData.append('fullName', values.fullName as string);

      dispatch(authActions.updateUserProfileRequest(formData));
    }
  };

  return (
    <Spin spinning={isLoading}>
      <div>
        <div className='mt-4 w-20 h-20 overflow-hidden rounded-full m-auto my-4'>
          <img
            src={
              typeof selectedImage === 'string'
                ? selectedImage
                : selectedImage
                ? URL.createObjectURL(selectedImage)
                : DUMMY
            }
            alt='Selected Image Preview'
            className='w-full h-full object-cover m-auto'
          />
          p
        </div>
        <div className='text-center my-8 text-lg'>
          <p>{user?.email || ''}</p>
        </div>
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          name='profile'
          fields={[{ name: 'fullName', value: user?.fullName || '' }]}
        >
          <Form.Item label='Profile Picture' name='profileImage'>
            <Input type='file' onChange={handleImageChange} accept='image/*' />
          </Form.Item>
          <Form.Item
            label='Full Name'
            name='fullName'
            rules={[
              { required: true, message: 'Please input your full name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button htmlType='submit'>Update</Button>
          </Form.Item>
        </Form>
      </div>
    </Spin>
  );
};

export { Profile };
