
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbars.module.css";
import { NavLink } from "react-router-dom";
import Text from './Text'

function Navbars () {

    return (
        
        <div className={styles.nav}>
       
            <img src={ require('../assets/logo.png') }/>
 
            <ul> 
                <li><NavLink to="/mypage"><Text n="b2" text="마이페이지" color="#238D9B"/></NavLink></li>
                <li><NavLink to="/clinic"><Text n="b2" text="상담" color="#238D9B"/></NavLink></li>
                <li><NavLink to="/qna"><Text n="b2" text="Q&A" color="#238D9B"/> </NavLink></li>
            </ul>
        </div>



    );
  
}

export default Navbars;
