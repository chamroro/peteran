
import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import PeteranLogo from '../assets/logo.png'
import FooterSNS from '../assets/footersns.png'

function Footers () {

    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div style={{flex: 1, display: 'flex'}}>
                    <img className={styles.logo} src={ PeteranLogo } alt={'peteran_logo'} style={{paddingTop: 'auto'}}/>
                </div>

                <div>
                    <img className={styles.sns} src={ FooterSNS } alt={'peteran_footer'} style={{paddingTop: 'auto'}}/>
                </div>
            </div>
      
        </div>
    );
  
}

export default Footers;
