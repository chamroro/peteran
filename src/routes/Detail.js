import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
import Navbars from "../components/Navbars"
import Text from "../components/Text";
import Footers from "../components/Footer"
import { API_ENDPOINT } from "../config";
import axios from "axios";

function Detail(){
    const {id} = useParams();
    const [qna, setQna]= useState([]);
    const getQna = async() => {
        axios.get(`${API_ENDPOINT}/qna/${id}`)
        .then((res) => {
            setQna(res.data);
            console.log(qna);
          }).catch(() => {
            console.log("sdlkfsldkfn")
            alert('검색 에러!')
            
          })
    };
   
    useEffect(() => {
        getQna();
    }, [id]);
    return (
        <div>
            <Navbars />
            <div className={style.container}>
                <div style={{marginTop:"65px", marginBottom:"29px"}}>
                    <Text  n="h2" text="QnA"/>
                </div>
                <div style={{ marginTop:"32px", display: "flex",
                    gap: "0px 15px"}}>
                    <Text n="b1" text="작성자" />
                   <Text n="b1" text={qna.user.name} color= "" /> 
                </div>
                <div style={{ marginTop:"21px", marginBottom:"37px"}}>
                    <Text n="h4" text={qna.title}/>
                </div>
                <div style={{marginBottom:"83px"}}>   
                    <Text n="b1" text={qna.content} />
                </div>
               
            {   
               
                           qna.answers
                           .map((answer) => (
                            
                               <div className={style.answer}>
                               <div className={style.cardHeader}>
                                   <div className={style.cardVeteran}>
                                       <img style={{width:"70px", height:"70px", marginRight: "23px"}} src={ require('../assets/veteran_img_1.png') } />
                                       <Text n="h6" text={answer.veteran.name} />
                                       <Text n="b3" text={answer.veteran.location} />
                                   </div>
                                   <hr></hr>
                                   <Text n="b1" text={answer.content} />
                                   <div className={style.writeDate}>
                                        <Text n="b3" text="5시간 전 답변 작성됨" />
                                   </div>
                               </div>
                               <div className={style.cardFooter}>
                                   <div>
                                       <h3>반려동물의 진료부터 행동교정까지 고민중이라면?  </h3>
                                       <h3><strong>{answer.veteran.name} {(answer.veteran.type === 'vet' ? '수의사' : '훈련사')}</strong>와 상담해보세요.  </h3>
                        
                        
                                   </div>
                                   <div style={{display: "flex",}}>
                                       <div className={style.review}>
                                           <h4 style={{color: "#238D9B", margin:"0"}}><Text n="b1" text="15분 35,000원" /></h4>
                                           <Text n="b3" text="반려인이 남긴 후기 45개" />
                                       </div>
                                       <button>
                                           <Text n="b1" text="예약하기" />
                                       </button>
                                   </div>
                               </div>
                               <div>
    
                               </div>
                               </div>
                           ))
                       } 
              
             
         </div>
           <Footers />
     
       
        </div>
    ); 
}

 export default Detail;