import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Footer from '../../Footer/Footer';
import star from '../../../assets/star.png';
import './Shop.scss'

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

        return(
            <div className='col-md-4'> 
                <div className="product-container ">
                    <div className='image-container'>
                        <Link to={`/shopproducts/${product.product_id}`} key={index}>
                            <img className='shop-image' src={product.product_image}/>
                        </Link>
                        <button className='hide-button'>DETAILS</button>
                    </div>
                    <div className='product-title'>{product.product_title}</div>
                    <div className='rating-container'>
                        <img className='star' src={star}/>
                        <div className="rating">{product.product_rating}</div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="shopPage">
            <div className='pageTitle'>Shop All Products</div>
            <div className="narrowResults row">
                <div className="col-md-6 filter">
                    <button className="narrowButton ">Filter Products</button>
                </div>
                <div className="col-md-6 sortByFeature">
                    <div className="sortBy">Sort By</div>
                    <select className="narrowButton " >
                        <option>Rating</option>
                        <option>Price (low to high)</option>
                    </select>
                </div>
                
                
            </div>
            <div>
                <div className='shop-container row'>{shopProducts}</div>
            </div>
            
            <Footer />
        </div>
    )
}
export default Shop;