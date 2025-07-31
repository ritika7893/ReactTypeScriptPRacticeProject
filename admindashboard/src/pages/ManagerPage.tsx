import React, { useState } from 'react';
import { Card, Table, Typography, Button } from 'antd';

const { Title } = Typography;

const ManagerDetail: React.FC = () => {
  const [checkedIn, setCheckedIn] = useState(false);

  const manager = {
    Name: 'Ritika Kumari',
    Email: 'ritika@example.com',
    Role: 'Manager',
    Department: 'Engineering',
    Phone: '+91-9876543210',
    Location: 'Noida Office',
  };

  const columns = [
    ...Object.keys(manager).map((key) => ({
      title: key,
      dataIndex: key,
      key,
      align: 'center' as const,
    })),
    {
      title: 'Attendance',
      key: 'attendance',
      align: 'center' as const,
      render: () => (
        <Button
          type={checkedIn ? 'default' : 'primary'}
          danger={checkedIn}
          onClick={() => setCheckedIn((prev) => !prev)}
        >
          {checkedIn ? 'Check-out' : 'Check-in'}
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      ...manager,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Manager Details</Title>
      <Card style={{ marginTop: 16 }}>
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

export default ManagerDetail;
