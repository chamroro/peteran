import {useState, useEffect} from "react";
import style from "./Home.module.css";
import Navbars from "../components/Navbars";
import QnAPageStyle from "./QnA.module.css";
import Text from "../components/Text";
import QnaSearchBox from "../components/qna/QnAInfoBox";
import WriteIcon from "../assets/b2.png";
import Layout from "../components/Layout";
import styled from "styled-components";
import Footers from "../components/Footer"
import { API_ENDPOINT } from "../config";

function QnAPage() {
  const [currentTab, setCurrentTab] = useState('vet') // [vet, trainer]
  const [searchKeyword, setSearchKeyword] = useState('슬개골 탈구')
  const [sortMethod, setSortMethod] = useState('recent') // [recent, visit]
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true);
  const getMovies = async() => {
    const json = await(await fetch(`${API_ENDPOINT}/search/qna/${searchKeyword}?take=10`)).json();
    console.log(json.data);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <div className={style.containers}>
        <Navbars />

        <Layout>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
              <div style={{marginRight: 32}}>
                <Text n={'h2'} text={'QnA'} />
              </div>

              <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center'}}>
                <QnATab style={{color: currentTab === 'vet' ? 'black' : 'gray'}}
                        onClick={() => setCurrentTab('vet')}>
                  수의사
                </QnATab>
                <QnATab style={{color: currentTab === 'trainer' ? 'black' : 'gray'}}
                        onClick={() => setCurrentTab('trainer')}>
                  훈련사
                </QnATab>
              </div>
            </div>

            <div style={{display: 'flex'}}>
                <button className={QnAPageStyle.QnAWriteButton}>
                  <img src={WriteIcon} style={{width: 24, height: 24, marginRight: 10}} alt={'write'}/>
                  글쓰기
                </button>
            </div>
          </div>

          {/* TODO: search icon */}
          <div className={QnAPageStyle.QnAInputDiv}>
            <input
              className={QnAPageStyle.QnAInput}
              value={searchKeyword}
              placeholder={'검색'}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>

          <div style={{textAlign: 'right', marginBottom: 12, gap: 12, display: 'flex'}}>
            <label>
              <input type="radio" name="recent" value="recent"
                     checked={sortMethod === 'recent'}
                     onClick={() => setSortMethod('recent')}
              />
              최신 답변순
            </label>
            <label>
              <input type="radio" name="visit" value="visit"
                     checked={sortMethod === 'visit'}
                     onClick={() => setSortMethod('visit')}
              />
              조회순
            </label>
          </div>

          <div style={{display: "flex", flexDirection: 'column', gap: 20}}>
            {
              [...Array(4).keys()].map( () => (
                <QnaSearchBox
                  title={'5세 여아 말티즈(중성화X), 슬개골 탈구된 것 같아요'}
                  author={'뭉이'}
                  createDatetime={'2시간'}
                  veteran={'강형욱 훈련가'}
                  otherAnswers={4}
                />
              ))
            }
          </div>

        </Layout>
        <Footers />
      </div>
    </div>
  )

}
export default QnAPage;

const QnATab = styled.div`
  width: 96px;
  margin-top: auto;
  font-size: 20px;
  margin-bottom: 12px;
  cursor: pointer;
`
