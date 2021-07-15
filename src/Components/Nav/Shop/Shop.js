import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import star from '../../../assets/star.png';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [stars, setStars] = useState([]);
    const [hover, setHover] = useState('hover');

    useEffect(() => {
        axios.get('/api/shopproducts')
        .then(res => {
            console.log('res.data', res.data)
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [stars])

    let shopProducts = products.map((product, index) => {
        // let number = product.product_rating;
        // let rater = function(){
        //     let element = <div></div>
        //     for(let i = 0; i < number; i++){
        //         let newDiv = document.createElement("div");
        //         let newContent = document.createTextNode("star");
        //         let newElement = newDiv.appendChild(newContent);
        //         element = newElement;
        //     }
        //     return element;
        // };

        return(
            <div className='shop-container'>
                <section className='image-container'>
                    <Link to={`/shopproducts/${product.product_id}`} key={index}>
                        <img className='shop-image' src={product.product_image}/>
                    </Link>
                    <button className='hide-button'>DETAILS</button>
                </section>
                {/* {hover === 'hover' 
                ? <div>
                    <img className='shop-image-hover' src={product.product_image}/>
                    <button>DETAILS</button>
                </div> 
                : <img />} */}
                <p className='shop-title'>{product.product_title}</p>
                <section className='rating-container'>
                    <img className='star' src={star}/>
                    {product.product_rating}
                </section>
            </div>
        )
    })

    return(
        <div className='shop'>
            <Nav />
            <Banner />
            <p className='shop-products'>Shop Products</p>
            <div className='shop-containers'>{shopProducts}</div>
            <Footer />
        </div>
    )
}
export default Shop;