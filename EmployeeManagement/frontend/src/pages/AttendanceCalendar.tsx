import React from 'react';
import { Calendar, Badge } from 'antd';

interface AttendanceData {
  date: string; // Format: YYYY-MM-DD
  status: 'present' | 'absent' | 'leave';
  checkIn?: string;
  checkOut?: string;
}

const attendanceRecords: AttendanceData[] = [
  { date: '2025-08-01', status: 'present', checkIn: '09:00', checkOut: '17:00' },
  { date: '2025-08-02', status: 'absent' },
  { date: '2025-08-03', status: 'leave' },
  // Add more data here...
];

const AttendanceCalendar: React.FC = () => {
  const getListData = (value: moment.Moment) => {
    const date = value.format('YYYY-MM-DD');
    const record = attendanceRecords.find((r) => r.date === date);
    if (!record) return [];

    return [
      {
        type:
          record.status === 'present'
            ? 'success'
            : record.status === 'absent'
            ? 'error'
            : 'warning',
        content: record.status.toUpperCase(),
      },
    ];
  };

  const dateCellRender = (value: moment.Moment) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default AttendenceCalendar;
