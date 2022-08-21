import { useState } from "react";
import style from "./Home.module.css";
import Text from "../components/Text";
import Navbars from "../components/Navbars"
import Footers from "../components/Footer"
import {NavLink, useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

function Home() {
  const history = useHistory()
  const [searchKeyword, setSearchKeyword] = useState('');
  
  return (
      <div className={style.background}>
        <img 
          style={{
            width: "100%",
            height:"598px",
            position: "absolute",
            top:"0px",
            left:"0px",
            zIndex:-1
          }}
        src={ require('../assets/yellowrec.png') } />
        
        <div className={style.greyBackground}>
        </div>
        <img 
          style={{
            width: "100%",
            height:"160px",
            position: "absolute",
            top:"2290px",
            left:"0px",
            zIndex:-1
          }}
        src={ require('../assets/footerbg.png') } />
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
      
        <div className={style.blockText}>
        
          <h1 className={style.bigTitle}>진료부터 행동교정까지,</h1>
          <h1 className={style.bigTitle}>처음부터 <strong>페테랑</strong> 하자</h1>
          
          <div style={{paddingTop: "14px"}}><Text n="b1" text="주말 야간에 우리집 댕댕이가 아프다면?" color="#495057"/></div>
          <div><Text n="b1" text="기다림 없이 수의사와 연결해드릴게요." color="#495057"/></div>
          <button style={{marginTop: "36px"}} className={style.redButton}>
            <img className={style.buttonIcon} src={ require('../assets/b1.png') }/>
            <Text n="B" text="응급상담하기" color="#fff"/>
          </button>
        </div>
        <div className={style.searchBar}>
          <form onSubmit={() => history.push(`/search?keyword=${searchKeyword}`)}>
            <input style={{paddingLeft: "21px",}}
                   placeholder="반려동물의 증상을 검색해보세요."
                   onChange={e => setSearchKeyword(e.target.value)}
            />
            <NavLink to="/search"><img src={ require('../assets/search.png') } /></NavLink>
          </form>
        </div>

        <div className={style.home2}>
          <div className={style.card1}>
            <img src={ require('../assets/check.png') }/>
            <div><Text n="h6" text="고양이가 털토를 했어요" color=" "/></div>
            <div><Text n="b3" text="안녕하세요. 수의사 김테랑입니다! 고양이 입에서 털뭉치가 나오는 것에 대해서는 걱정하지 않으셔도 됩니다." color=" "/></div>
          </div>
          <div className={style.card2}>
          <img src={ require('../assets/check.png') }/>
            <div><Text n="h6" text="우리집 강아지는 왜 눈물자국이 심할까요?" color=" "/></div>
            <div><Text n="b3" text="사료나 간식은 보통 어떤 것으로 급여하시나요? 알러지가 있는 음식을 급여할 경우 눈물자국이 짙습니다." color=" "/></div>
          </div>
          <div className={style.card3}>
          <img src={ require('../assets/check.png') }/>
            <div><Text n="h6" text="고양이가 왜 자꾸 숨을까요?" color=" "/></div>
            <div><Text n="b3" text="고양이가 숨는 것은 아주 자연스러운 행동입니다.  다만, 증상이 계속되면 질병 때문일 수도 있으니 수의사에게 문의해주세요!" color=" "/></div>
          </div>
          <div className={style.card4}>
          <img src={ require('../assets/check.png') }/>
            <div><Text n="h6" text="훈련사님, 분리불안은 어떻게 고칠 수 있을까요?" color=" "/></div>
            <div><Text n="b3" text="애착 증세가 심한 강아지군요. 견주분께서 집을 나갈 때 보통 어떤 행동을 보이나요?" color=" "/></div>
          </div>
        </div>
        <div className={style.home2side}>
          <div className={style.primaryC}><Text n="c" text="서비스 소개" color="#00856F"/></div>
          <div style={{marginTop:"10px"}}><Text n="h4" text="우리집 고양이의" color="#00856F"/></div>
          <div style={{marginBottom:"25px"}}><Text n="h4" text="행동이 궁금하다면?" color="#00856F"/></div>
          <Link to="/qna"><button style={{
            backgroundColor:"#1D6A72"}} className={style.colorButton}>
                <img className={style.buttonIcon} src={ require('../assets/b2.png') }/>
              <Text n="B" text="다른 질문 더 보러가기" color="#fff"/></button></Link>
        </div>
      
        <div className={style.home3}>
        
          <div><Text n="h2" text="나를 브랜딩 할 수 있는" color="#238D9B"/></div>
          <div><h2 style={{
            fontWeight: "700",
            fontSize: "52px",
            lineHeight: "55px",
            letterSpacing: "-0.5px",
            color: "#212529",
            margin: "10px 0px"
          }}>페테랑</h2></div>
          
          <div style={{
            color: "#495057",
            marginTop:"18px",
          }}><Text n="b1" text="반려동물 전문가에 대한 소비자의 접근성을 높여," color="#495057"/></div>
          <div style={{
            color: "#495057",
            marginBottom:"88px",
          }}><Text n="b1" text="펫테크 시장 전체 규모를 키웁니다." color="#495057"/></div>
          <button style={{
            backgroundColor:"#238D9B",
          marginLeft: "0px"}}
            className={style.colorButton}>
                <img className={style.buttonIcon} src={ require('../assets/b3.png') }/>
                <Text n="B" text="페테랑 전문가로서 함께하기" color="#fff"/></button>
          
        </div>
        <img className={style.home3img} src={ require('../assets/home3.png') } />
        <Navbars />
        <div className={style.footer}> <Footers /></div>
        </div> 
   
       
      </div>
     

  );
}

export default Home;