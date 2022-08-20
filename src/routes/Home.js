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
    <div className={style.container}>
      
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
        <div style={{paddingTop: "21px", paddingBottom: "24px;"}}><Text n="h2" text="진료부터 행동교정까지," color="#238D9B"/></div>
        <div><Text n="h2" text="처음부터 페테랑하자" color="#238D9B"/></div>
        
        <div style={{paddingTop: "24px"}}><Text n="b1" text="주말 야간에 우리집 댕댕이가 아프다면?" color="#495057"/></div>
        <div><Text n="b1" text="기다림 없이 수의사와 연결해드릴게요." color="#495057"/></div>
        <button style={{marginTop: "34px"}} className={style.redButton}>
          <img className={style.buttonIcon} src={ require('../assets/b1.png') }/>
          <Text n="B" text="응급상담하기" color="#fff"/>
        </button>
      </div>
      <div className={style.searchBar}>
        <input style={{paddingLeft: "10px"}} placeholder="검색"></input>
      </div>

      <div className={style.home2}>
        <div className={style.card1}>
          <img src={ require('../assets/check.png') }/>
          <div><Text n="h6" text="고양이가 털토를 했어요" color=" "/></div>
          <div><Text n="b3" text="안녕하세요. 수의사 김테랑입니다! 고양이 입에서 털뭉치가 나오는 것에 대해서는 걱정하지 않으셔도 됩니다." color=" "/></div>
        </div>
        <div className={style.card2}>
        <img src={ require('../assets/check.png') }/>
          <div><Text n="h6" text="우리집 강아지는 왜 눈물자국이
심할까요?" color=" "/></div>
          <div><Text n="b3" text="사료나 간식은 보통 어떤 것으로 
급여하시나요? 알러지가 있는 음식을 
급여할 경우 눈물자국이 짙습니다." color=" "/></div>
        </div>
        <div className={style.card3}>
        <img src={ require('../assets/check.png') }/>
          <div><Text n="h6" text="고양이가 왜 자꾸 숨을까요?" color=" "/></div>
          <div><Text n="b3" text="고양이가 숨는 것은 아주 자연스러운 
행동입니다.  다만, 증상이 계속되면 
질병 때문일 수도 있으니 수의사에게 
문의해주세요!" color=" "/></div>
        </div>
        <div className={style.card4}>
        <img src={ require('../assets/check.png') }/>
          <div><Text n="h6" text="훈련사님, 분리분안은
어떻게 고칠 수 있을까요?" color=" "/></div>
          <div><Text n="b3" text="애착 증세가 심한 강아지군요. 
견주분께서 집을 나갈 때 보통 어떤 행동을 
보이나요?" color=" "/></div>
        </div>
      </div>
      <div className={style.home2side}>
        <div><Text n="c" text="서비스 소개" color="#00856F"/></div>
        <div style={{marginTop:"10px"}}><Text n="h4" text="우리집 고양이의" color="#00856F"/></div>
        <div style={{marginBottom:"25px"}}><Text n="h4" text="행동이 궁금하다면?" color="#00856F"/></div>
        <button style={{
          backgroundColor:"#1D6A72"}} className={style.colorButton}>
              <img className={style.buttonIcon} src={ require('../assets/b2.png') }/>
            <Text n="B" text="다른 질문 더 보러가기" color="#fff"/></button>
      </div>
      <div className={style.greyBackground}>
      </div>
      <div className={style.home3}>
       
        <div><Text n="h2" text="나를 브랜딩 할 수 있는" color="#238D9B"/></div>
        <div><h2 style={{
          fontWeight: "700",
          fontSize: "52px",
          lineHeight: "52px",
          letterSpacing: "-0.5px",
          color: "#212529",
          margin: "10px 0px"
        }}>펫테랑</h2></div>
        
        <div style={{
          color: "#495057",
          marginTop:"18px",
        }}><Text n="b1" text="반려동물 전문가에 대한 소비자의 접근성을 높여," color="#495057"/></div>
        <div style={{
          color: "#495057",
          marginBottom:"88px",
        }}><Text n="b1" text="펫테크 시장 전체 규모를 키웁니다." color="#495057"/></div>
        <button style={{
          backgroundColor:"#238D9B"}}
          className={style.colorButton}>
              <img className={style.buttonIcon} src={ require('../assets/b3.png') }/>
              <Text n="B" text="페테랑 전문가로서 함께하기" color="#fff"/></button>
        
      </div>
      <img className={style.home3img} src={ require('../assets/home3.png') } />
    </div> 
  );
}

export default Home;