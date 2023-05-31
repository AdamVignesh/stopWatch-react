import React, { useState,useEffect } from 'react'
import './WatchStyles.css';

function WatchComponent(props) {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

 

  useEffect(() => {
  
    if(props.isResetClicked)
    {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    }
    else if(!props.isPauseClicked)
    {
        let interval = null;
        interval = setInterval(() => {
          if (seconds == 59) {
            setSeconds(0);
            setMinutes(prevMinutes => prevMinutes + 1);
          } else if (minutes == 59) {
            setSeconds(0);
        setMinutes(0);
        setHours(prevHours => (prevHours === 23 ? 0 : prevHours + 1));
      } else {
        setSeconds(prevSeconds => prevSeconds + 1);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }

  }, [seconds, minutes,props.isPauseClicked,props.isResetClicked]);
  
  

  

  return (
    <div className='watch'>
      <h1>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
    </div>
  );
}


export default WatchComponent