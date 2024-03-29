import { ROUTES } from '@/constants/routes';
import {
  ClusterOutlined,
  FundProjectionScreenOutlined,
  HighlightOutlined,
  OrderedListOutlined,
  ReadOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';

const MENU_ITEMS: MenuProps['items'] = [
  {
    key: 'Blog',
    label: 'Blog',
    title: 'Blog',
    icon: <ReadOutlined />,
    children: [
      {
        key: ROUTES.BLOG_LIST,
        label: 'Blog List',
        title: 'Blog List',
        icon: <OrderedListOutlined />,
      },
      {
        key: ROUTES.BLOG_CREATE,
        label: 'Blog Create',
        title: 'Blog Create',
        icon: <HighlightOutlined />,
      },
    ],
  },
  {
    key: 'Category',
    label: 'Category',
    title: 'Category',
    icon: <ClusterOutlined />,
    children: [
      {
        key: ROUTES.CATEGORY_LIST,
        label: 'Category List',
        title: 'Category List',
        icon: <OrderedListOutlined />,
      },
      {
        key: ROUTES.CATEGORY_CREATE,
        label: 'Category Create',
        title: 'Category Create',
        icon: <HighlightOutlined />,
      },
    ],
  },
  {
    key: 'Role',
    label: 'Role',
    title: 'Role',
    icon: <FundProjectionScreenOutlined />,
    children: [
      {
        key: ROUTES.ROLE_LIST,
        label: 'Role List',
        title: 'Role List',
        icon: <OrderedListOutlined />,
      },
      {
        key: ROUTES.ROLE_CREATE,
        label: 'Role Create',
        title: 'Role Create',
        icon: <HighlightOutlined />,
      },
    ],
  },
  {
    key: 'User',
    label: 'User',
    title: 'User',
    icon: <UsergroupAddOutlined />,
    children: [
      {
        key: ROUTES.USER_LIST,
        label: 'User List',
        title: 'User List',
        icon: <OrderedListOutlined />,
      },
      {
        key: ROUTES.USER_CREATE,
        label: 'User Create',
        title: 'User Create',
        icon: <HighlightOutlined />,
      },
    ],
  },
  {
    key: 'Profile',
    label: 'Burak Şahin Erden',
    title: 'Profile',
    icon: <UserOutlined />,
  },
];

export { MENU_ITEMS };
