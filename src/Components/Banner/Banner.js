import React from 'react';
import './Banner.css';

const Banner = () => {

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    window.onload = function () {
        var twoHours = 60 * 120,
            display = document.querySelector('#time');
        startTimer(twoHours, display);
    };

    return(
        <div className='banner'>
            <p>Order within the next 2 hours to receive FREE SHIPPING on your order!</p>
            <div className='spacer'></div>
            <p id='time'></p>
        </div>
    )
}
export default Banner;