import { useState, useEffect } from "react";
import style from "./Home.module.css";
import Movie from "../components/Movie";
import Text from "../components/Text";
import Navbars from "../components/Navbars"

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true);
  const getMovies = async() => {
    const json = await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className={style.containers}>
      
      <img 
        style={{
          width: "100%",
          position: "absolute",
          top:"0px",
          left:"0px",
          zIndex:-1
        }}
      src={ require('../assets/homebg.png') } />
      <Navbars />
      <div className={style.blockText}>
        <div><Text n="B" text="반려동물 상담 👋" color="#238D9B"/></div>
        <div><Text n="h2" text="진료부터 행동교정까지," color="#238D9B"/></div>
        <div><Text n="h2" text="처음부터 페테랑하자" color="#238D9B"/></div>
        
        <div><Text n="b1" text="주말 야간에 우리집 댕댕이가 아프다면?" color="#495057"/></div>
        <div><Text n="b1" text="기다림 없이 수의사와 연결해드릴게요." color="#495057"/></div>
        <button className={style.redButton}><Text n="B" text="응급상담하기" color="#fff"/></button>
      </div>
      <div className={style.searchBar}>
        <input placeholder="검색"></input>
      </div>

    </div> 
  );
}

export default Home;