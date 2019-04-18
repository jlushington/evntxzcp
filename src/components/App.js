import React, { Component } from 'react';
import {BrowserRouter  as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

//PAGES
import UserProfile from './Pages/UserProfile/UserProfile';
import LocationsList from './Pages/Locations/LocationsList';
import ProductOrdersList from './Pages/ProductOrders/ProductOrdersList';
import ProductReviewsList from './Pages/ProductReviews/ProductReviewsList';
import ProductsList from './Pages/Products/ProductsList';
import TaxesList from './Pages/Taxes/TaxesList';
import UserOrdersList from './Pages/UserOrders/UserOrdersList';
import UserReviewsList from './Pages/UserReview/UserReviewsList';
import PoeDevicesList from './Pages/PoeDevices/PoeDevicesList'
import LocationAdd from './Pages/Locations/LocationAdd';
import ProductAdd from './Pages/Products/ProductAdd';
import PoeDeviceAdd from './Pages/PoeDevices/PoeDevicesList';
import TokenVerification from './TokenVerification/TokenVerification';

class App extends Component {

  componentDidMount() {

    const isAuth=localStorage.getItem("isAuth");
    const authtoken=localStorage.getItem("authtoken");

    var t = new TokenVerification(authtoken);

    t.verifyToken();
  }
  render() {
    return (
    <Router>
               <div class="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
                    <i class="fas fa-bars"></i>
                 </a>
                 <nav id="sidebar" class="sidebar-wrapper">
                    <div class="sidebar-content">
                        <div class="sidebar-brand">
                            <a href="#">Evntxz Control Panel</a>
                            <div id="close-sidebar">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>

                        <div class="sidebar-header">
                            <div class="user-pic">
                                <img class="img-responsive img-rounded" src={"https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"}  alt={"User picture"}></img>
                            </div>
                            <div class="user-info">
                                <span class="user-name">Jhon<strong>Smith</strong></span>
                                <span class="user-role">Administrator</span>
                                <span class="user-status"><i class="fa fa-circle"></i><span>Online</span></span>
                            </div>
                        </div>

                        {/*<!-- sidebar-header  
                        <div class="sidebar-search">
                            <div>
                                <div class="input-group">
                                    <input type="text" class="form-control search-menu" placeholder="Search..." />
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        -->*/}

                        {/* <!-- sidebar-search  -->*/}
                        <div class="sidebar-menu">
                            <ul>
                                <li class="header-menu"><span>User</span></li>

                                <li>
                                  <a href="/userprofile">
                                    <i class="fa fa-book"></i>
                                    <span>Profile</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>

                                <li>
                                  <a href="/userreviewlist">
                                    <i class="fa fa-book"></i>
                                    <span>Reviews</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>

                                <li>
                                  <a href="/userorderslist">
                                    <i class="fa fa-book"></i>
                                    <span>Orders</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>

                                <li class="header-menu"> <span>Events</span> </li>
                                <li>
                                  <a href="/locationslist">
                                    <i class="fa fa-book"></i>
                                    <span>Location</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>

                                <li>
                                  <a href="/productlist">
                                    <i class="fa fa-book"></i>
                                    <span>Products</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>

                                <li>
                                  <a href="/productorderslist">
                                    <i class="fa fa-book"></i>
                                    <span>Orders</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>

                                <li>
                                  <a href="/productreviewlist">
                                    <i class="fa fa-book"></i>
                                    <span>Reviews</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>

                                <li>
                                  <a href="/taxeslist">
                                    <i class="fa fa-book"></i>
                                    <span>Taxes</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>

                                <li>
                                  <a href="/poedeviceslist">
                                    <i class="fa fa-book"></i>
                                    <span>POE Management</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                  </a>
                                </li>
                               
                            </ul>
                        </div>


                        
                    </div>
                 </nav>
                 <main>

                      <Header />
                      <Route path="/userprofile" exact component={UserProfile} />
                      <Route path="/productorderslist" exact component={ProductOrdersList} />
                      <Route path="/productreviewlist" exact component={ProductReviewsList} />
                      <Route path="/productlist" exact component={ProductsList} />
                      <Route path="/taxeslist" exact component={TaxesList} />
                      <Route path="/userorderslist" exact component={UserOrdersList} />
                      <Route path="/userreviewlist" exact component={UserReviewsList} />
                      <Route path="/locationslist" exact component={LocationsList} />
                      <Route path="/locationadd" exact component={LocationAdd} />
                      <Route path="/poedeviceslist" exact component={PoeDevicesList} />
                      <Route path="/productadd" exact component={ProductAdd} />
                      <Route path="/poedeviceadd" exact component={PoeDeviceAdd} />

                      
                      
                      
                      <Footer />

                 </main>
            </div>
    </Router>

    );
  }
}

export default App;