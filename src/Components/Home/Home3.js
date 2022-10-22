import React from 'react';
import './Home.scss';
import lemonBottle from '../../assets/lemonBottle.jpg';
import lemonBath from '../../assets/lemonbath.jpg';
import grapefruit from '../../assets/grapefruit bottles.jpg'

const Home3 = () => {
    return(
        <div className="home3">
            <div className="row">
                <div className="col imgContainer">
                    <img src={lemonBottle} alt=""/>
                </div>
                <div className="col imgContainer" >
                    <img src={lemonBath} alt=""/>
                </div>
                <div className="col imgContainer">
                    <img  src={grapefruit} alt=""/>
                </div>

                
                
                <div className="col-md-12 citrusButtonContainer">
                    <button className="ctaShopCitrus col-md-7">Shop the citrus collection</button>
                </div>

            </div>
        </div>
    )
}
export default Home3;