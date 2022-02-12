import React from 'react';
import ToiletUnavialable from '../../images/toilet-unavialable.png';
import Check from '../../images/check.png';
import Close from '../../images/close.png';
import './card.css';

const Card = ({ roomNumber, status, diff }) => {
  return (
    <div className='card'>
      <h1>Room {roomNumber.replace('l', '')}</h1>
      <div className='image-container'>
        {status ? (
          <img src={Close} alt='status' className='status' />
        ) : (
          <img src={Check} alt='status' className='status' />
        )}
        <img src={ToiletUnavialable} alt='' className='bg' />
      </div>
      <div className='time'>
        <h3>
          {status ? 'This room is not avialable' : 'This room is avialable'}
        </h3>
        {!status || (
          <span>{`It took a time for ${parseInt(diff)} seconds`}</span>
        )}
      </div>
    </div>
  );
};

export default Card;
