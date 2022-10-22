import React from 'react';
import {useEffect, useState} from 'react';
import './Banner.css';

const Banner = () => {

    function Countdown({ time }) {
        const [timeLeft, setTimeLeft] = useState(time);
        var hours, minutes, seconds;
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setTimeLeft((t) => t - 1);
          }, 1000);
          return () => clearInterval(intervalId);
        }, []);
        
        hours = Math.floor((timeLeft / 60)/60);
        minutes = Math.floor((timeLeft / 60)%60);
        seconds = timeLeft % 60;
        
        if(seconds.toString().length !== 2){
            seconds = '0' + seconds;
        }
        if(minutes.toString().length !==2){
            minutes = '0' + minutes;
        }
        return <div>{hours} : {minutes} : {seconds}</div>;
      }

    return(
        <div className='col-md-12 banner'>
            <div>Order within the next 2 hours to receive FREE SHIPPING!</div>
            <div className="time">
                <Countdown time={60 * 120} />
            </div>
        </div>
    )
}
export default Banner;