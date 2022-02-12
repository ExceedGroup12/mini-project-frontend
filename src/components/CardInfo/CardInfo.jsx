import React from 'react';
import './card-info.css';
import { AiOutlineRollback } from 'react-icons/ai';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { FaRegSadCry } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardInfo = ({ room, status, first, diff, estimated }) => {
  return (
    <div className='card-info'>
      <h1 className='room-number'># {room.replace('l', '')}</h1>
      <Link to='/'>
        <AiOutlineRollback className='back' />
      </Link>
      <div className='contents'>
        {status ? (
          <FaRegSadCry className='face' />
        ) : (
          <RiEmotionHappyLine className='face' />
        )}
        <h1>Since {first}</h1>
        {!diff ? <h2>Toilet is avialable</h2> : <h2>Tooks {diff} minutes</h2>}
        {estimated === '00:00' ? (
          <h3>
            Estimated Time : {!status ? '00:00 minutes' : 'Over Estimated'}
          </h3>
        ) : (
          <h3>Estimated Time : {!status ? '00:00' : estimated} minutes</h3>
        )}
      </div>
    </div>
  );
};

export default CardInfo;
