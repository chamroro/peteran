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
import axios from "axios";

function QnAPage() {
  const [currentTab, setCurrentTab] = useState('vet') // [vet, trainer]
  const [searchKeyword, setSearchKeyword] = useState('초콜')
  const [sortMethod, setSortMethod] = useState('recent') // [recent, visit]
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get(`${API_ENDPOINT}/search/qna/${searchKeyword}?take=10`)
    .then((res) => {
      setSearchResult(res.data);
      setLoading(false)
    }).catch(() => {
      alert('에러!')
    })
  }, []);

  console.log(searchResult);

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
              searchResult.map((result) => (
                <QnaSearchBox
                  title={result.title}
                  author={'뭉이'}
                  createDatetime={'2시간'}
                  veteran={'강형욱'}
                  otherAnswers={result.answers ? result.answers.length : 0}
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
