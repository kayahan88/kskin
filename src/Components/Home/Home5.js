import React from 'react';
import './Home.scss';
import blue from '../../assets/blue.jpg';
import Footer from '../Footer/Footer';

const Home5 = () => {
    return(
        <div className='home-4'>
            <img className='home-4-image' src={blue} />
            <h1 className='text-box-4'>Something here about how you need to buy something now. </h1>
            <h1 className='text-box-5'>Something else saying something else here would be good I think.</h1>
            <section>
                <Footer />
            </section>
        </div>
    )
}
export default Home5;