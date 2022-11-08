import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Home.scss';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

const Home3 = () => {
    const [products, setProducts] = useState([]);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        axios.get('/api/shop-products')
        .then(res => {
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [stars])



    let productSlides = products.map((product, index) => {
        return(
            <SwiperSlide>
                <div className="swiperSlideContainer">
                <img alt={`Shop the ${product.product_collection} Collection`} src={product.product_image}
                
                />
                <div className="sliderLink">
                <Link to={`/shopproducts/${product.product_collection}`} key={index} className="home3Link">
                    <button className="sliderLinkButton">SHOP {product.product_collection} COLLECTION</button>
                </Link>
                </div>

                </div>

            </SwiperSlide>
        )
    })

    return(
        <div className="home3">
            <div aria-hidden="true" className="row swiperContainer swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        pagination={{
                            type: "progressbar",
                            dynamicBullets: true
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        slidesPerView={2}
                        className="mySwiper"
                    >
                        {productSlides}
                    </Swiper>
                   
                </div>
            </div>
        </div>
    )
}
export default Home3;