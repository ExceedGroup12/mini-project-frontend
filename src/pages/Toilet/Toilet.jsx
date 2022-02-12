import React, { useEffect, useState } from 'react';
import './toilet.css';
import { useParams } from 'react-router-dom';
import { CardInfo } from '../../components';
import axios from 'axios';

const Toilet = () => {
  const { room } = useParams();
  const [info, setInfo] = useState({
    room: '',
    status: false,
    first: '',
    diff: '',
    estimated: '',
  });

  const formatTime = (time) => {
    const newTime = time.split('T');
    return newTime[1].split('.')[0];
  };

  function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (isNaN(minutes)) {
      minutes = '00';
    }
    if (isNaN(seconds)) {
      seconds = '00';
    }
    return minutes + ':' + seconds; // Return is HH : MM : SS
  }

  const onGetRoomById = (room) => {
    axios
      .get(`https://ecourse.cpe.ku.ac.th/exceed12/api/status/${room}`)
      .then((res) => {
        const data = res.data;
        setInfo({
          room: data.room,
          status: data.status,
          first: formatTime(data.first),
          diff: convertHMS(parseInt(data.diff)),
          estimated: convertHMS(parseInt(data.estimate)),
        });
      });
  };

  useEffect(() => {
    onGetRoomById(room);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      onGetRoomById(room);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className='toilet-container'>
      <div className='card-info-container'>
        <CardInfo
          room={info.room}
          status={info.status}
          first={info.first}
          diff={info.diff}
          estimated={info.estimated}
        />
      </div>
    </div>
  );
};

export default Toilet;
