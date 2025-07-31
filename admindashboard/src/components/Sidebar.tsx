import React from 'react';
import {
  UserOutlined,
  TeamOutlined,
  SolutionOutlined,
  FileDoneOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'admin',
    icon: <UserOutlined />,
    label: 'Admin',
  },
  {
    key: 'manager',
    icon: <SolutionOutlined />,
    label: 'Manager',
  },
  {
    key: 'employee',
    icon: <TeamOutlined />,
    label: 'Employee',
  },
  {
    key: 'leave',
    icon: <FileDoneOutlined />,
    label: 'Leave',
  },
];

const Sidebar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Sider
      width={200}
      style={{
        background: colorBgContainer,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['manager']}
          style={{ borderRight: 0 }}
          items={items}
          onClick={({ key }) => navigate(`/${key}`)}
        />
      </div>

      <div
        style={{
          padding: '16px',
          borderTop: '1px solid #f0f0f0',
        }}
      >
        <Button type="primary" icon={<PlusOutlined />} block>
          Add Manager
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
