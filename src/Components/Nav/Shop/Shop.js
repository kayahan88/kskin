import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav';
import Footer from '../../Footer/Footer';
import whitebottle from '../../../assets/whitebottle_brownlinen.jpg';
import serum from '../../../assets/serumdropper.jpg';
import whitebottle_whitefabric from '../../../assets/whitebottle_whitefabric.jpg';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
        .then(res => {
            console.log('res.data', res.data)
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // let shopProducts = products.map((product, index) => {
    //     return(
    //         <p>{product.product_title}</p>
    //     )
    // })

    return(
        <div>
            <Nav />
            <section className='shop-images'>
                <img src={whitebottle}/>
                <section>
                    <p>{products[0].product_title}</p>
                    <p>{products[0].product_price}</p>
                </section>
                <img src={serum}/>
                <section>
                    <p>{products[0].product_title}</p>
                    <p>{products[0].product_price}</p>
                </section>
                <img src={whitebottle_whitefabric}/>
                <section>
                    <p>{products[0].product_title}</p>
                    <p>{products[0].product_price}</p>
                </section>
            </section>
            <Footer />
        </div>
    )
}
export default Shop;