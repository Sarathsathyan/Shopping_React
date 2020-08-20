import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,browserRouter, Route, Link } from 'react-router-dom';

const Navbar =props =>{

        return(

            <header>

                <div className="header-area">
                    <div className="main-header ">
                        <div className="header-top top-bg d-none d-lg-block">
                            <div className="container-fluid">
                                <div className="col-xl-12">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="header-info-left d-flex">
                                            {/*<div className="flag">*/}
                                            {/*    <img src="assets/img/icon/header_icon.png" alt=""></img>*/}
                                            {/*</div>*/}

                                            <ul className="contact-now">
                                                <li>8147907030</li>
                                            </ul>
                                        </div>
                                        <div className="header-info-right">
                                            <ul>
                                                <li><Router><Link to={'/login'}>My account</Link></Router></li>
                                                <li><a href="product_list.html">Wish List </a></li>
                                                <li><a href="cart.html">Shopping</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">

                                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                                        <div className="logo">
                                            <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></img></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">

                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="Catagori.html">Catagori</a></li>
                                                    <li className="hot"><a href="#">Latest</a>
                                                        <ul className="submenu">
                                                            <li><Router><Link to={'/productList'}>Product List</Link></Router></li>
                                                            <li><a href="single-product.html"> Product Details</a></li>
                                                        </ul>
                                                    </li>


                                                    <li><Link to={'/contact'}>Contact</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                        <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                            <li className="d-none d-xl-block">
                                                <div className="form-box f-right ">
                                                    <input type="text" name="Search" placeholder="Search products"></input>
                                                    <div className="search-icon">
                                                        <i className="fas fa-search special-tag"></i>
                                                    </div>

                                                </div>
                                            </li>
                                            <li className=" d-none d-xl-block">
                                                <div className="favorit-items">
                                                    <i className="far fa-heart"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopping-card">
                                                    <a href="cart.html"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </li>
                                            <li className="d-none d-lg-block">
                                            <Link to='/login' className="btn header-btn">Sign In</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )

};

export default Navbar;