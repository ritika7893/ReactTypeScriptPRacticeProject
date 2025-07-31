import React from 'react';
import { Typography, Card, Row, Col, Divider,  Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const AdminPage: React.FC = () => {
  

  return (
    <div>
      <Title level={3}>👋 Welcome, Admin!</Title>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card>
            <Text strong>Present Employee/Total Employee </Text>
         
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Text strong>Present Manager/Total Manager</Text>
            
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Text strong>Status:</Text>
          
          </Card>
        </Col>
      </Row>

      <Divider />

      


     <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => alert('New Announcement')}
        style={{ marginBottom: 16 }}
      >
       Add Announcement
      </Button>
    </div>
  );
};

// ✅ This line is important!
export default AdminPage;
