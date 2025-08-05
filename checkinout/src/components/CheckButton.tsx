import React from 'react';
import { Button } from 'antd';

interface CheckButtonProps {
  isCheckedIn: boolean;
  onButtonClick: () => void;
}

const CheckButton: React.FC<CheckButtonProps> = ({ isCheckedIn, onButtonClick }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <Button
        type="primary"
        danger={isCheckedIn}
        size="large"
        onClick={onButtonClick}
   
      >
        {isCheckedIn ? 'Check Out' : 'Check In'}
      </Button>
    </div>
  );
};

export default CheckButton;
