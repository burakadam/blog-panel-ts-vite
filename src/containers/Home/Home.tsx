import { Tag } from 'antd';
import ImageUploadForm from './FileImport';

const Home = () => {
  return (
    <div>
      Home <Tag>Blog</Tag>
      <ImageUploadForm />
    </div>
  );
};

export { Home };
