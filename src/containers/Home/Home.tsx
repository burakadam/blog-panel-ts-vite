import { Tag } from 'antd';
import ImageUploadForm from './FileImport';

const Home = () => {
  return (
    <div>
      Home <Tag>Blog</Tag>
      <img src='https://blogbucketaws.s3.eu-central-1.amazonaws.com/8a26451e-f5e9-4c08-9f33-1dce511b61a9.webp' />
      <ImageUploadForm />
    </div>
  );
};

export { Home };
