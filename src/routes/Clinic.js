import { useState, useEffect } from "react";
import style from "./Home.module.css";
import Movie from "../components/Movie";
import TextStyle from "../components/TextStyle";
import Navbars from "../components/Navbars"


function Clinic(){
    return(
        <div className={style.containers}>
             <Navbars />

             <h1> 클리닉 페이지 입니다! </h1>
        </div>
    );
}
export default Clinic;