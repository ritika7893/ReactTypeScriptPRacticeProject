import React from 'react';
import { Layout } from 'antd';


import AppHeader from './components/AppHeader';
import Sidebar from './components/Sidebar';
import RightSection from './components/RightSection';

const App: React.FC = () => {
  return (
  
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Layout>
          <Sidebar />
          <RightSection />
        </Layout>
      </Layout>
  
  );
};

export default App;
