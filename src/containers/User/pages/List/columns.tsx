import { IUser } from '@/models/user';
import { Button } from 'antd';

export const COLUMNS = (
  handleToogleActivation: (a: string, b: boolean) => void
) => [
  {
    dataIndex: 'fullName',
    title: 'Full Name',
  },
  {
    dataIndex: 'email',
    title: 'Email',
  },
  {
    dataIndex: 'createdAt',
    title: 'Create At',
  },
  {
    render: (item: IUser) => (
      <Button onClick={() => handleToogleActivation(item._id, !item.isActive)}>
        {item.isActive ? 'DEACTIVATE' : 'ACTIVATE'}
      </Button>
    ),
  },
  // {
  //   render: (item: IUser) => (
  //     <Button href={`${ROUTES.USER_UPDAET}/${item._id}`} key={item._id}>
  //       DETAIL
  //     </Button>
  //   ),
  // },
];
