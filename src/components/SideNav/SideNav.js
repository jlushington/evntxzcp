import React, {Component} from 'react';
import './SideNav.css'

export default class SideNav extends Component{

    render(){
        return(
            <div class="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
                    <i class="fas fa-bars"></i>
                 </a>
                 <nav id="sidebar" class="sidebar-wrapper">
                    <div class="sidebar-content">
                        <div class="sidebar-brand">
                            <a href="#">pro sidebar</a>
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

                        {/*<!-- sidebar-header  -->*/}
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

                        {/* <!-- sidebar-search  -->*/}
                        <div class="sidebar-menu">
                            <ul>
                                <li class="header-menu"><span>General</span></li>

                                <li class="sidebar-dropdown">
                                    <a href="#">
                                        <i class="fa fa-tachometer-alt"></i>
                                        <span>Dashboard</span>
                                        <span class="badge badge-pill badge-warning">New</span>
                                    </a>
                                    <div class="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Dashboard 1
                                                    <span class="badge badge-pill badge-success">Pro</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Dashboard 2</a>
                                            </li>
                                            <li>
                                                <a href="#">Dashboard 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>


                                <li class="sidebar-dropdown">
                                    <a href="#">
                                        <i class="fa fa-shopping-cart"></i>
                                        <span>E-commerce</span>
                                        <span class="badge badge-pill badge-danger">3</span>
                                    </a>
                                    <div class="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Products</a>
                                            </li>
                                            <li>
                                                <a href="#">Orders</a>
                                            </li>
                                            <li>
                                                <a href="#">Credit cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                               
                            </ul>
                        </div>


                        
                    </div>
                 </nav>
                 <main class="page-content">



                 
                 
                 </main>
            </div>
        );
    }
}