import {useState, useEffect} from "react";
import style from "./QnA.module.css";
import Navbars from "../components/Navbars";
import Text from "../components/Text";
import QnaSearchBox from "../components/qna/QnAInfoBox";
import WriteIcon from "../assets/b2.png";
import Layout from "../components/Layout";
import Footers from "../components/Footer"
import { API_ENDPOINT } from "../config";
import axios from "axios";
import {useHistory, useLocation} from "react-router-dom";

function QnAPage() {
  const location = useLocation();
  const history = useHistory()
  const initKeyword = new URLSearchParams(location.search).get('keyword');

  const [searchKeyword, setSearchKeyword] = useState(initKeyword)
  const [sortMethod, setSortMethod] = useState('recent') // [recent, visit]
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (!initKeyword) return;
    axios.get(`${API_ENDPOINT}/search/qna/${searchKeyword}?take=10`)
    .then((res) => {
      setSearchResult(res.data);
      setLoading(false)
    }).catch(() => {
      alert('검색 에러!')
    })
  }, [initKeyword]);

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/qna?keyword=${searchKeyword}`)
  }

  return (
    <div>
      <div className={style.containers}>
        <Navbars />

        <Layout>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
              <div style={{marginRight: "32px", marginBottom: "13px"}}>
                <Text n={'h2'} text={'QnA'} />
              </div>
            </div>

            <div style={{display: 'flex'}}>
                <button className={style.QnAWriteButton}>
                  <img src={WriteIcon} style={{width: 24, height: 24, marginRight: 10}} alt={'write'}/>
                  글쓰기
                </button>
            </div>
          </div>

          {/* TODO: search icon */}
         
          <div className={style.QnAInputDiv}>
            <form onSubmit={handleSubmit} style={{width: '100%'}}>
              <input
                className={style.QnAInput}
                value={searchKeyword}
                placeholder={'검색'}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </form>
          </div>
          <div style={{textAlign: 'right', marginBottom: 12, gap: 12, display: 'flex', justifyContent: 'flex-end'}}>
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
              searchResult
                .sort((a, b) => b.answers.length - a.answers.length)
                .map((result) => (
                <QnaSearchBox
                  key={searchKeyword}
                  id={result.id}
                  title={result.title}
                  author={result.author.name}
                  createDatetime={result.created_at}
                  answers={result.answers}
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
