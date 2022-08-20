
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbars.module.css";
import { NavLink } from "react-router-dom";
import Text from './Text'

function Navbars () {

    return (
        
        <div className={styles.nav}>
        <span>
            <img 
                src={ require('../assets/logo.png') }/>
        </span>
            <ul>
            <li className={styles.li1}><NavLink to="/qna"><Text n="b1" text="Q&A" color="#238D9B"/> </NavLink></li>
            <li className={styles.li2}><NavLink to="/clinic"><Text n="b1" text="상담" color="#238D9B"/></NavLink></li>
            <li className={styles.li3}><NavLink to="/mypage"><Text n="b1" text="마이페이지" color="#238D9B"/></NavLink></li>
            </ul>
        </div>



    );
  
}

export default Navbars;
