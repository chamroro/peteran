import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
import Navbars from "../components/Navbars"
import Text from "../components/Text";

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
                <div style={{ marginTop:"32px"}} >
                    <Text n="b1" text="작성자" />
                    <Text n="b1" text="뭉이" color= "" />
                </div>
                <div style={{ marginTop:"21px", marginBottom:"37px"}}>
                    <Text n="h4" text="강아지 눈물 자국이 너무 심한데, 눈 영양제를 줘야 할까요?"/>
                </div>
                <Text n="b1" text="강아지 눈물 자국이 점점 심해져요 ㅠ 처음에는 눈꼽이 조금 끼는 정도였는데, 이제는 턱끝까지 눈물자국이 번졌어요. 
매일 세수를 시켜주는 데도 나아지지가 않네요. 눈 영양제를 주고 싶은데, 혹시라도 부작용이 있을까봐 걱정이에요. 
어떻게 하면 좋을까요?" />
        </div>
        </div>
    );
}

export default Detail;