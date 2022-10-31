import React, { useEffect, useState } from 'react';
import axios from 'axios';
import star from '../../../assets/star.png';
import './IndividualProduct.css'

const IndividualProduct = (props) => {
    window.scrollTo(0,0);
    const {product_id} = props.match.params;

    const [product, setProduct] = useState([]);
    const [test, setTest] = useState('');
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        axios.get(`/api/shop-products/${product_id}`)
        .then(res => {
            console.log('res.data', res.data)
            setProduct(res.data[0])
        })
    }, [test])

    const add = () => {
        setQuantity(quantity + 1);
    };

    const subtract = () => {
        if(quantity > 0){
            setQuantity(quantity - 1);
        } else(setQuantity(0))
    }

    return(
        <div>
            <section className='individual-product'>
                <img src={product.product_image}/>
                <section className='product-details-container'>
                    <h2 className='product-title'>{product.product_title}</h2>
                    <p className='product-price'>{product.product_price}</p>
                    <div className='line'></div>
                    <h1>{product.product_description}</h1>
                    <section className='rating-container'>
                        <img className='star' src={star}/>
                        <p>{product.product_rating}</p>
                    </section>
                    <section className='add-to-cart-container'>
                        <section className='quantity-container'>
                            <h1 className='quantity'>Quantity</h1>
                            <section className='quantity-buttons'>
                                <button onClick={() => subtract()}>-</button>
                                <p>{quantity}</p>
                                <button onClick={() => add()}>+</button>
                            </section>
                        </section>
                        <button className='add-to-cart' onClick={() => alert(`${product.product_title} -- Quantity: ${quantity} -- Added to Cart!`)}>ADD TO CART</button>
                    </section>
                </section>
            </section>
        </div>
    )
}
export default IndividualProduct;