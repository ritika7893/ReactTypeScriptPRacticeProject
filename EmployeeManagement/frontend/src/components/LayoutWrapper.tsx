import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import HeaderBar from '../components/HeaderBar';
import { Outlet } from 'react-router';
import RightSection from '../components/RightSection';

const { Header, Sider, Content } = Layout;

export default function LayoutWrapper() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{  minHeight:'80vh'}}  width={220}>
        <Sidebar />
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px' }}>
          <HeaderBar />
        </Header>

        <Content style={{ margin: '16px', padding: '24px', background: '#fff' }}>
          <Outlet />
        </Content>
         <RightSection />
      </Layout>
    </Layout>
  );
}
