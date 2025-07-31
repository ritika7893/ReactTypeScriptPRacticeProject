import React from 'react';
import { Layout } from 'antd';
import { Routes, Route, Navigate } from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import ManagerPage from '../pages/ManagerPage';
import EmployeePage from '../pages/EmployeePage';
/*import {LeavePage} from '../pages/LeavePage';/*} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/leave" element={<LeavePage />} />*/

const { Content } = Layout;

const RightSection: React.FC = () => {
  return (
    <Content style={{ padding: '24px', minHeight: '100vh', background: '#fff' }}>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/manager" element={<ManagerPage />} />
       
        <Route path="/employee" element={<EmployeePage />} />
        
      </Routes>
    </Content>
  );
};

export default RightSection;
