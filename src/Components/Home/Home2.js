import React from 'react';
import './Home.css';
import girl5 from '../../assets/girl 5.jpg'

const Home2 = () => {
    return(
        <div>
            <img className='girl-5' src={girl5} />
            <h1 className='text-box-2'>Some text here about SPF and how much is in the skincare.</h1>
        </div>
    )
}
export default Home2;