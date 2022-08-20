import style from "./Home.module.css";
import Navbars from "../components/Navbars";
import {useEffect, useState} from "react";
import QnaSearchBox from "../components/search/QnAInfoBox";
import SearchPageStyle from "./Search.module.css";
import VeteranSearchBox from "../components/search/VeteranInfoBox";
import Layout from "../components/Layout";
import SearchSectionHeader from "../components/search/search.section.header";
import Footers from "../components/Footer"
import {NavLink, useLocation} from "react-router-dom";
import axios from "axios";
import {API_ENDPOINT} from "../config";

function SearchPage() {
  const location = useLocation();
  const initKeyword = new URLSearchParams(location.search).get('keyword');
  const [searchKeyword, setSearchKeyword] = useState(initKeyword)

  const [currentTab, setCurrentTab] = useState('all') // [all, qna, consulting]
  const [qnaSearchResult, setQnaSearchResult] = useState([])
  const [veteranSearchResult, setVeteranSearchResult] = useState([])

  useEffect(() => {
    axios.get(`${API_ENDPOINT}/search/qna/${searchKeyword}?take=10`)
      .then(res => {
        setQnaSearchResult(res.data)
      }).catch(() => {
        alert('검색 에러!')
    })

    axios.get(`${API_ENDPOINT}/search/veteran/all/${searchKeyword}?take=10`)
      .then(res => {
        setVeteranSearchResult(res.data)
      }).catch(() => {
      alert('검색 에러!')
    })
  }, [initKeyword])

  function handleSubmit() {
    axios.get(`${API_ENDPOINT}/search/qna/${searchKeyword}?take=10`)
      .then(res => {
        console.log(res.data)
      }).catch(() => {
      alert('검색 에러!')
    })
  }

  return (
    <div>
      <div className={style.containers}>
        <Navbars />

        <Layout>
          <div className={SearchPageStyle.SearchInputDiv}>
            <form onSubmit={handleSubmit}>
              <input
                className={SearchPageStyle.SearchInput}
                value={searchKeyword}
                onChange={e => setSearchKeyword(e.target.value)}
              />
            </form>
            <div className={SearchPageStyle.SearchIcon}>
              <NavLink to="/search"><img src={ require('../assets/search.png') } /></NavLink>
            </div>
          </div>

          <div className={SearchPageStyle.SearchTabDiv}>
            <div className={SearchPageStyle.SearchTab}
                 onClick={() => setCurrentTab('all')}>
              전체
            </div>
            <div className={SearchPageStyle.SearchTab}
                 onClick={() => setCurrentTab('qna')}>
              QnA
            </div>
            <div className={SearchPageStyle.SearchTab}
                 onClick={() => setCurrentTab('consulting')}>
            상담
            </div>
          </div>

          <div style={{marginBottom: 52}}>
            <SearchSectionHeader headerText={'QnA'}/>

            <div style={{display: "flex", flexDirection: 'column', gap: 20}}>
              {
                qnaSearchResult.map((qna) => (
                  <QnaSearchBox
                    title={qna.title}
                    author={qna.author.name}
                    createDatetime={qna.created_at}
                    veteran={'강형욱 훈련가'}
                    otherAnswers={qna.answers.length}
                  />
                ))
              }
            </div>
          </div>

          <div>
            <SearchSectionHeader headerText={'상담'}/>

            <div style={{display: "flex", flexDirection: 'column', gap: 20}}>
              {
                veteranSearchResult.map( () => (
                  <VeteranSearchBox
                    name={'이정연 수의사'}
                    location={'하나 동물 병원'}
                    tags={['건강 검진', '슬개골 수술']}
                    reviewNumber={4}
                    availableStatus={true}
                  />
                ))
              }
            </div>
          </div>

        </Layout>
        <Footers />
      </div>
    </div>
  )
}
export default SearchPage;