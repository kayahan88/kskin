import React from 'react';
import './Home.scss';
import girl5 from '../../assets/girl 5.jpg'

const Home2 = () => {
    return(
        <div className="home2">
            <img className='girl-5' src={girl5} alt="" />
            <div className="col-md-2 ctaHome2">
                    <div>Protect your skin from the sun.</div>
                    <button>Shop SPF</button>
                </div>
        </div>
    )
}
export default Home2;