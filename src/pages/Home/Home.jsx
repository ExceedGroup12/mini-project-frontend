import React, { useState, useEffect } from 'react';
import { Card } from '../../components';
import { Link } from 'react-router-dom';
import './home.css';
import axios from 'axios';

const Home = () => {
  const [rooms, setRooms] = useState([]);

  const onGetAllRooms = () => {
    axios
      .get('https://ecourse.cpe.ku.ac.th/exceed12/api/allStatus')
      .then((res) => {
        setRooms(res.data);
      });
  };

  useEffect(() => {
    onGetAllRooms();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      onGetAllRooms();
      console.log('World');
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className='home-container'>
      <div className='card-container'>
        {rooms.map((room) => (
          <Link to={`/${room.room}`} key={room.room}>
            <Card
              roomNumber={room.room}
              status={room.status}
              diff={room.diff}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
