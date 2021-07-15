import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainHome from './Components/Home/MainHome';
import Home4 from './Components/Home/Home4';
import FAQ from './Components/Footer/FAQ/FAQ';
import AboutUs from './Components/Footer/AboutUs/AboutUs';
import StoreLocations from './Components/Footer/StoreLocations/StoreLocations';
import TermsOfService from './Components/Footer/Policies/TermsOfService';
import PrivacyPolicy from './Components/Footer/Policies/PrivacyPolicy';
import ShippingPolicy from './Components/Footer/Policies/ShippingPolicy';
import ReturnPolicy from './Components/Footer/Policies/ReturnPolicy';
import Shop from './Components/Nav/Shop/Shop';
import Account from './Components/Nav/Account/Account';
import Cart from './Components/Nav/Cart/Cart';
import IndividualProduct from './Components/Products/IndividualProduct/IndividualProduct';
// import Moisturizer from './Components/Products/Moisturizer';
// import NightSerum from './Components/Products/NightSerum/NightSerum';
// import TheBodyLotion from './Components/Products/TheBodyLotion/TheBodyLotion';

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainHome}/>
            <Route path='/home4' component={Home4} />
            <Route path='/FAQ' component={FAQ} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/StoreLocations' component={StoreLocations} />
            <Route path='/TermsOfService' component={TermsOfService}/>
            <Route path='/PrivacyPolicy' component={PrivacyPolicy}/>
            <Route path='/ShippingPolicy' component={ShippingPolicy}/>
            <Route path='/ReturnPolicy' component={ReturnPolicy}/>
            <Route path='/Shop' component={Shop} />
            <Route path='/Account' component={Account} />
            <Route path='/Cart' component={Cart} />
            <Route path='/shopproducts/:product_id' component={IndividualProduct} />
            {/* <Route path='/Moisturizer' component={Moisturizer} />
            <Route path='/NightSerum' component={NightSerum} />
            <Route path='/TheBodyLotion' component={TheBodyLotion} /> */}
        </Switch>
    </BrowserRouter>
)