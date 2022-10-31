import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import star from '../../../assets/star.png';
import './Shop.scss'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [stars, setStars] = useState([]);
    const [hover, setHover] = useState('hover');
    const [drawerOpen, setDrawerOpen] = useState("drawerClosed");
    const [filterCitrus, setFilterCitrus] = useState(null);
    const [filterJade, setFilterJade] = useState(null);
    const [filterWhite, setFilterWhite] = useState(null);
    const [filteredBy, setFilteredBy] = useState(null);

    useEffect(() => {
        axios.get('/api/shop-products')
        .then(res => {
            console.log('res.data', res.data)
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [stars])

    function setFilters(){
        $(`#${filteredBy}`).prop("checked", "checked");
        let newFilter = $(`#${filteredBy}`)
        console.log(newFilter)
        console.log(filteredBy)

        // USE PARAMS!
    }


    function handleInputChange(e){
        e.checked = !e.checked;
    }

    function handleFilter(){
        let checkboxes = $('.filters input:checked');
        let filterList = [];
        let newFilter = 0;
        checkboxes.each(function(){
            filterList.push(this.value)
            newFilter = this.value

        })
        getProductsByFilter(newFilter)
        setDrawerOpen(false)
    }

    function getProductsByFilter(product_collection) {
        axios.get(`/api/shop-products/filter-collection/${product_collection}`)
        .then(res => {
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
        if(product_collection == 1){
            setFilteredBy('citrus');
        } else if(product_collection == 2){
            setFilteredBy('jade');
        } else if(product_collection == 3){
            setFilteredBy('white');
        }
        setFilters();
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
        return (
            <div className={`filterDrawer col-md-3 ${drawerOpen}`}>
                <div>Filter Products</div>
                <button className="closeButton" onClick={closeDrawer}>X</button>
                <div className="filters">
                    <div>Collections</div>
                    <div className="filter">
                        <input type="checkbox" id="white" value="3" checked={filterWhite} onChange={handleInputChange}/>
                        <label for="white">White Collection</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" id="jade" value="2" checked={filterJade} onChange={handleInputChange}/>
                        <label for="jade">Jade Collection</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" id="citrus" value="1" checked={filterCitrus} onChange={handleInputChange}/>
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
    function filterByCitrus(){

    }
    function filterByJade(){
        
    }
    function filterByWhite(){
        
    }

    return(
        <div className="shopPage row">
            <div className="container">
                <FilterDrawer />
                <div className='pageTitle'>Shop All Products</div>
                <div className="narrowResults row">
                    <div className="col-md-6 filter">
                        <button className="narrowButton" onClick={openDrawer}>Filter Products</button>
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
            </div>
        </div>
    )
}
export default Shop;