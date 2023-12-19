import { Menu as AntdMenu, Layout, MenuProps } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MENU_ITEMS } from './constants';

const { Sider } = Layout;

const Menu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleClick: MenuProps['onClick'] = (e) => e.key && navigate(e.key);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint={'lg'}
    >
      <AntdMenu
        items={MENU_ITEMS}
        theme='dark'
        mode='inline'
        onClick={handleClick}
      />
    </Sider>
  );
};

export { Menu };
