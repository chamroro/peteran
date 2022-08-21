
import React from "react";
import styles from "./Navbars.module.css";
import { NavLink } from "react-router-dom";
import Text from './Text'
import PeteranLogo from '../assets/logo.png'

function Navbars () {
    return (
        <div className={styles.nav}>
          <div style={{flex: 1, display: 'flex'}}>
            <NavLink to="/"><img src={ PeteranLogo } alt={'peteran_logo'} style={{paddingTop: 'auto'}}/></NavLink>
          </div>

          <div>
            <ul>
              <li style={{paddingTop:2}}><Text n="b2" text="마이페이지" color="#238D9B"/></li>
              <li><NavLink to="/clinic"><Text n="b2" text="상담" color="#238D9B"/></NavLink></li>
              <li><NavLink to="/qna"><Text n="b2" text="Q&A" color="#238D9B"/> </NavLink></li>
            </ul>
          </div>
        </div>
    );
  
}

export default Navbars;
