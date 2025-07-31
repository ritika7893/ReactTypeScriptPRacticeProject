import React from 'react';
import { Card, Table, Typography } from 'antd';

const { Title } = Typography;

const EmployeePage: React.FC = () => {
  const employee = {
    Name: 'xyz',
    Email: 'xyz@example.com',
    Role: 'Employee',
    Department: 'Marketing',
    Phone: '+91-9876543210',
  
  };

  const columns = Object.keys(employee).map((key) => ({
    title: key,
    dataIndex: key,
    key,
    align: 'center' as const,
  }));

  const data = [
    {
      key: '1',
      ...employee,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>👤 Employee Details</Title>
      <Card>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      </Card>
    </div>
  );
};

export default EmployeePage;
