import { uploadImage } from '@/services/assets/api';
import React, { useState } from 'react';

interface ImageUploadFormProps {}

const ImageUploadForm: React.FC<ImageUploadFormProps> = () => {
  // const [form] = Form.useForm();
  // const [fileList, setFileList] = useState<UploadFile[]>([]);

  // const normFile = (e: { file: RcFile; FileList: RcFile[] }) => [e.file];

  // const checkFile = (file: RcFile) => {
  //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  //   if (!isJpgOrPng) {
  //     message.error('You can only upload JPG/PNG file!');
  //   }
  //   return isJpgOrPng;
  // };

  // const handleChange = ({ fileList }: UploadChangeParam) => {
  //   setFileList(fileList);
  // };

  // const onFinish = async (values: { image: UploadFile[] }) => {
  //   // Log the uploaded file information
  //   console.log('Uploaded Image:', values.image[0].originFileObj);

  //   const res = await uploadImage(values.image[0].originFileObj!);
  //   console.log('res', res);
  // };
  const [file, setFile] = useState();

  const submit = async (event) => {
    event.preventDefault();

    console.log('file', file);

    const formData = new FormData();
    formData.append('poster', file);
    console.log('formData', formData);
    // formData.append('caption', caption);
    // await axios.post('/api/posts', formData, {
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });

    const res = await uploadImage(formData);
    console.log('res', res);
  };

  return (
    // <Form
    //   form={form}
    //   name='image-upload-form'
    //   onFinish={onFinish}
    //   initialValues={{ remember: true }}
    // >
    //   <Form.Item
    //     name='image'
    //     label='Image'
    //     valuePropName='fileList'
    //     getValueFromEvent={normFile}
    //   >
    //     <Upload
    //       listType='picture-card'
    //       fileList={fileList}
    //       onChange={handleChange}
    //       beforeUpload={checkFile}
    //     >
    //       {fileList.length >= 1 ? null : (
    //         <div>
    //           <UploadOutlined />
    //           <div style={{ marginTop: 8 }}>Upload</div>
    //         </div>
    //       )}
    //     </Upload>
    //   </Form.Item>

    //   <Form.Item>
    //     <Button type='primary' htmlType='submit'>
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
    <form onSubmit={submit}>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type='file'
        accept='image/*'
      ></input>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default ImageUploadForm;
