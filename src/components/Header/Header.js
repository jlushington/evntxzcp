import React, {Component} from 'react';

import './Header.css';

export default class Header extends Component{

    render(){
        return(
            <header className="masthead mb-auto bg-white p-b-10">
                <div className="container">

                {/* HEADER NAV */}
                    <div className="row">
                        <div className="col-sm-4 text-left pt-0 navigation">
                           
                        </div>
                        <div className="col-sm-4 font-logo">Evntxz</div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </header>
        );
    }
}