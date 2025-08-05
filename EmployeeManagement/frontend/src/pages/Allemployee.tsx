import { Card, Row, Col, Avatar, Typography, Tag, message, Skeleton } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

const { Title } = Typography;

const UserProfilePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users"); // Update to match your backend
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        message.error("Error fetching user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Show 4 placeholder cards while loading
  const placeholderCards = new Array(4).fill(null);

  return (
    <div style={{ padding: '24px' }}>
      <Title level={3}>Organization Hierarchy</Title>

      <Row gutter={[24, 24]}>
        {(loading ? placeholderCards : users).map((user: any, index) => (
          <Col key={user?.id || index} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable>
              {loading ? (
                <Skeleton avatar paragraph={{ rows: 3 }} active />
              ) : (
                <Card.Meta
                  avatar={
                    user.avatar ? (
                      <Avatar src={user.avatar} />
                    ) : (
                      <Avatar icon={<UserOutlined />} />
                    )
                  }
                  title={user.name}
                  description={
                    <>
                      <div>{user.email}</div>
                      <div>Role: {user.role}</div>
                      <Tag
                        color={user.status === "Active" ? "green" : "volcano"}
                        style={{ marginTop: 8 }}
                      >
                        {user.status}
                      </Tag>
                    </>
                  }
                />
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserProfilePage;
