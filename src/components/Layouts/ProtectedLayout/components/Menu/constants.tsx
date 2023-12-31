import { ROUTES } from '@/constants/routes';
import {
  ClusterOutlined,
  HighlightOutlined,
  OrderedListOutlined,
  ReadOutlined,
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
];

export { MENU_ITEMS };
