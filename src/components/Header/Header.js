import React, {Component} from 'react';
import HomeMenu from './HomeMenu'
import styles from './style.module.scss'

export default class Header extends Component{

    render(){
        return(
            <div className={styles.topbar}>
                <div className="mr-4">
                    <HomeMenu />
                </div>
          </div>
        );
    }
}