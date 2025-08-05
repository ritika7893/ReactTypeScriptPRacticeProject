import React from 'react';
import { Layout } from 'antd';

import UserProfilePage from '../pages/UserProfilePage';



/*import {LeavePage} from '../pages/LeavePage';/*} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/leave" element={<LeavePage />} />*/

const { Content } = Layout;

const RightSection: React.FC = () => {
  return (
    <Content style={{ padding: 0, minHeight: '100vh', background: '#fff' }}>
      <UserProfilePage/>
    </Content>
  );
};

export default RightSection;
