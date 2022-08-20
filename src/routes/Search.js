import style from "./Home.module.css";
import Navbars from "../components/Navbars";
import {useState} from "react";
import QnaSearchBox from "../components/search/QnAInfoBox";
import SearchPageStyle from "./Search.module.css";
import VeteranSearchBox from "../components/search/VeteranInfoBox";
import Layout from "../components/Layout";
import SearchSectionHeader from "../components/search/search.section.header";
import Footers from "../components/Footer"

function SearchPage(){
  const [currentTab, setCurrentTab] = useState('all') // [all, qna, consulting]

  return (
    <div>
      <div className={style.containers}>
        <Navbars />

        <Layout>
          {/* TODO: search icon */}
          <div className={SearchPageStyle.SearchInputDiv}>
            <input
              className={SearchPageStyle.SearchInput}
              value={'슬개골 탈구'}
            />
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
          </div>

          <div>
            <SearchSectionHeader headerText={'상담'}/>

            <div style={{display: "flex", flexDirection: 'column', gap: 20}}>
              {
                [...Array(4).keys()].map( () => (
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