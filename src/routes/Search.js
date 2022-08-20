import style from "./Home.module.css";
import Navbars from "../components/Navbars";
import {useState} from "react";
import QnaSearchBox from "../components/search/QnA";
import SearchPageStyle from "./Search.module.css";
import Text from "../components/Text";
import VeteranSearchBox from "../components/search/Veteran";
import Layout from "../components/Layout";

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
            <div style={{display: 'flex', marginBottom: 22}}>
              <div style={{padding: '0 13px'}}>
                <Text n={'h6'} text={'QnA'} />
              </div>
              <div style={{flex: 1, borderBottom: 'solid 1px rgba(0, 0, 0, 0.3)'}}/>
            </div>
            <div style={{display: "flex", flexDirection: 'column', gap: 20}}>
              <QnaSearchBox/>
              <QnaSearchBox/>
              <QnaSearchBox/>
              <QnaSearchBox/>
            </div>
          </div>

          <div>
            <div style={{display: 'flex', marginBottom: 22}}>
              <div style={{padding: '0 13px'}}>
                <Text n={'h6'} text={'상담'} />
              </div>
              <div style={{flex: 1, borderBottom: 'solid 1px rgba(0, 0, 0, 0.3)'}}/>
            </div>
            <div style={{display: "flex", flexDirection: 'column', gap: 20}}>
              <VeteranSearchBox/>
              <VeteranSearchBox/>
              <VeteranSearchBox/>
              <VeteranSearchBox/>
            </div>
          </div>

        </Layout>
      </div>
    </div>
  )
}
export default SearchPage;