import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import star from '../../../assets/star.png';
import './Shop.scss'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState("drawerClosed");
    const [filteredBy, setFilteredBy] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [reset, setReset] = useState(null);

    useEffect(() => {
        axios.get('/api/shop-products')
        .then(res => {
            console.log('res.data', res.data)
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [reset]);

    useEffect(() => {
        let collectionCode = null;
        if(filteredBy == 'Cream'){
            collectionCode = 1;
        } else if(filteredBy == 'Jade'){
            collectionCode = 2;
        } else if(filteredBy == 'Citrus'){
            collectionCode = 3;
        }
        axios.get(`/api/shop-products/filter-collection/${collectionCode}`)
        .then(res => {
            setProducts(res.data);
            console.log('getting to here')
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [filteredBy])


    function handleFilter(){
        let checkboxes = $('.filters input:checked');
        let filterList = [];
        let newFilter = 0;
        checkboxes.each(function(){
            filterList.push(this.value)
            newFilter = this.value
            console.log(newFilter)
        })
        getProductsByFilter(newFilter)
        setDrawerOpen(false)
    }

    function sortBy(){
        let options = $('select.narrowButton ').value
        console.log(options)
    }

    function getProductsByFilter (product_collection){
        setFilteredBy(product_collection)
    }

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

    const FilterDrawer = () => {
        // const filterOptions = products.map((product, index) => {
        //     return(
        //         <div className="filter">
        //             <input type="checkbox" id={product.product_collection}/>
        //             <label for={product.product_collection}>{product.product_collection} Collection</label>
        //         </div>
        //     )
        // })
        return (
            <div className={`filterDrawer col-md-3 ${drawerOpen}`}>
                <div>Filter Products</div>
                <button className="closeButton" onClick={closeDrawer}>X</button>
                <div className="filters">
                    <div>Collections</div>
                    <div className="filter">
                        <input type="checkbox" id="cream" value="Cream" />
                        <label for="white">Cream Collection</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" id="jade" value="Jade" />
                        <label for="jade">Jade Collection</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" id="citrus" value="Citrus"/>
                        <label for="citrus">Citrus Collection</label>
                    </div>
                </div>
                <div className="applyFilters">
                    <button onClick={handleFilter}>Apply Filters</button>
                </div>
            </div>
        )
    }

    function openDrawer(){
        setDrawerOpen("drawerOpen")
    }
    function closeDrawer(){
        setDrawerOpen("drawerClosed")
    }
    function resetFilters(){
        setReset(true)
    }

    return(
        <div className="shopPage row">
            <div className="container">
                <FilterDrawer />
                <div className='pageTitle'>Shop All Products</div>
                <div className="narrowResults row">
                    <div className="col-md-6 filter">
                        <button className="narrowButton" onClick={openDrawer}>Filter Products</button>
                        <button className="narrowButton"onClick={resetFilters}>Reset Filters</button>
                    </div>
                    <div className="col-md-6 sortByFeature">
                        <div className="sortBy">
                            Sort By
                            <select className="narrowButton " >
                            <option>Rating (high to low)</option>
                            <option>Price (low to high)</option>
                        </select>
                        </div>

                        <button onClick={sortBy}>Sort</button>
                    </div>
                    
                    
                </div>
                <div>
                    <div className='shop-container row'>{shopProducts}</div>
                </div>
            </div>
        </div>
    )
}
export default Shop;