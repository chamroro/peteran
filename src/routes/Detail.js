import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
import Navbars from "../components/Navbars"
import Text from "../components/Text";
import Footers from "../components/Footer"

function Detail(){
    const {id} = useParams();
    const [movie, setMovie]= useState([]);
    const getMovies = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        console.log(json);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <Navbars />
            <div className={style.container}>
                <Text style={{ marginBottom:"29px"}} n="h2" text="QnA"/>
                <div style={{ marginTop:"32px", display: "flex",
                    gap: "0px 15px"}}>
                    <Text n="b1" text="작성자" />
                    <Text n="b1" text="뭉이" color= "" />
                </div>
                <div style={{ marginTop:"21px", marginBottom:"37px"}}>
                    <Text n="h4" text="강아지 눈물 자국이 너무 심한데, 눈 영양제를 줘야 할까요?"/>
                </div>
                <div style={{marginBottom:"83px"}}>   <Text n="b1" text="강아지 눈물 자국이 점점 심해져요 ㅠ 처음에는 눈꼽이 조금 끼는 정도였는데, 이제는 턱끝까지 눈물자국이 번졌어요. 
                매일 세수를 시켜주는 데도 나아지지가 않네요. 눈 영양제를 주고 싶은데, 혹시라도 부작용이 있을까봐 걱정이에요. 
                어떻게 하면 좋을까요?" /></div>
                <div className={style.answer}>
                    <div className={style.cardHeader}>
                        <div className={style.cardVeteran}>
                            <img style={{width:"70px", height:"70px", marginRight: "23px"}} src={ require('../assets/veteran_img_1.png') } />
                            <Text n="h6" text="설채현 수의사" />
                            <Text n="b3" text="아름 동물병원" />
                        </div>
                        <hr></hr>
                        <Text n="b1" text="눈물 자국 때문에 걱정이시군요. 
                            사실 강아지 눈물은 매일 나오기 때문에 걱정할 필요는 없지만, 정도가 심하면 평소에 강아지에게 어떤 걸 급여하는지를 
                            살펴봐야 해요.

                            꽤 오랜 시간이 눈물이 난 것 같은데, 사료나 간식을 조금씩 바꿔보면서 2개월 정도 지켜보세요. 
                            그래도 나아지지 않으면, 동물병원에 방문하셔서 눈 영양제와 약을 처방 받으시는 거를 추천합니다 :)"/>
                        <div className={style.writeDate}>
                            <Text n="b3" text="5시간 전 답변 작성됨" />
                        </div>
                    </div>
                    <div className={style.cardFooter}>
                        <div>
                            <h3>반려동물의 진료부터 행동교정까지 고민중이라면?  </h3>
                            <h3><strong>설채현 수의사</strong>와 상담해보세요.  </h3>
                           
                    
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
             
            </div>
            <Footers />
        </div>
    );
}

export default Detail;