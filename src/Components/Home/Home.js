import React from 'react';
import Nav from '../../Components/Nav/Nav';
import '../Home/Home.css'
import genericbottle from '../../assets/genericbottle.jpg'
import arrow from '../../assets/arrow.png';


const Home = () => {
    return (
        <div className='home'>
            <Nav />
            <img className='home-image' src={genericbottle} />
            <section>
                <h1 className='text-box'>Korean skincare made with only the best formulations and absolutely zero fragrances.</h1>
                <h1 className='k-skin' >k-skin</h1>
                <img className='arrow' src={arrow} />
                {/* <button className='button' >What is Korean skincare?</button> */}
            </section>
            {/* <img className='sparkles' src={sparkles} /> */}
            {/* <Home2 /> */}

            <div id="myModal" className='modal'>
                <div className='modal-content'>
                    <p>Want to save 10% on your first order?</p>
                </div>
            </div>


        </div>
    )
}
export default Home;