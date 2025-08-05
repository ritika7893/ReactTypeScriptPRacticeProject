import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Typography, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const UserProfilePage: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddress] = useState<string>(''); // ✅ New state to hold address
  const intervalRef = useRef<number | null>(null);



  const fetchLocation = async (lat: number, lon: number) => {
  const API_KEY = "2c949c44b86c4e209c044baa7d7cea6a"; // Replace with your key
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}&language=en&pretty=1`
    );

    const data = await response.json();
    console.log("Location details:", data);

    if (data && data.results && data.results.length > 0) {
      setAddress(data.results[0].formatted); // ✅ Set the formatted address
    } else {
      console.warn("No address found.");
      setAddress("Address not found");
    }
  } catch (error) {
    console.error("Error fetching address:", error);
    setAddress("Error fetching address");
  }
};

  const handleCheckIn = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setLocation({ lat, lng });
      fetchLocation(lat, lng);
      setIsRunning(true);
    },
    (error) => {
      console.error("Geolocation error:", error.message);
      alert("Unable to fetch your location. Please enable location access.");
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
};

const handleCheckOut = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setLocation({ lat, lng });
      fetchLocation(lat, lng);
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
    (error) => {
      console.error("Geolocation error:", error.message);
      alert("Unable to fetch your location. Please enable location access.");
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
};

  const formatTime = (seconds: number): string => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <Card
      bordered={true}
      style={{ width: 350, minHeight: 360, textAlign: 'center' }}
    >
      <Space direction="vertical" style={{ width: '100%' }} align="center">
        <Avatar size={124} icon={<UserOutlined />} />
        <Title level={3}>{formatTime(secondsElapsed)}</Title>

        {!isRunning ? (
          <Button type="primary" onClick={handleCheckIn}>
            Check In
          </Button>
        ) : (
          <Button danger onClick={handleCheckOut}>
            Check Out
          </Button>
        )}

        {location && (
          <div>
            <Text type="secondary">Lat: {location.lat.toFixed(4)}</Text> <br />
            <Text type="secondary">Lng: {location.lng.toFixed(4)}</Text>
          </div>
        )}

        {address && (
          <div style={{ padding: '0 10px' }}>
            <Text strong>Location:</Text><br />
            <Text type="secondary">{address}</Text>
          </div>
        )}
      </Space>
    </Card>
  );
};

export default UserProfilePage;
