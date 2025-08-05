import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

type TimerDisplayProps = {
  formattedTime: string;
};

const TimerDisplay: React.FC<TimerDisplayProps> = ({ formattedTime }) => (
  <div style={{ textAlign: 'center', marginTop: '40px' }}>
    <Title level={2}>{formattedTime}</Title>
  </div>
);

export default TimerDisplay;
