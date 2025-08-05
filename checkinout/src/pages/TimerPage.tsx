import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const TimerPage = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [location, setLocation] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Fetch user location using Geolocation API
  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation('Geolocation not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(5)}, Lon: ${longitude.toFixed(5)}`);
      },
      (error) => {
        setLocation(`Error getting location: ${error.message}`);
      }
    );
  };

  // Toggle check-in/check-out and fetch location
  const handleCheck = useCallback(() => {
    setIsCheckedIn((prev) => !prev);
    getLocation(); // Fetch location when button is clicked
  }, []);

  // Timer effect
  useEffect(() => {
    if (isCheckedIn) {
      intervalRef.current = window.setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isCheckedIn]);

  // Format time display
  const formattedTime = useMemo(() => {
    const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }, [elapsedSeconds]);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>{formattedTime}</h1>
      <button onClick={handleCheck}>
        {isCheckedIn ? 'Check Out' : 'Check In'}
      </button>
      {location && <p style={{ marginTop: '10px' }}>📍 {location}</p>}
    </div>
  );
};

export default TimerPage;














