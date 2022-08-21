import {useEffect, useState} from "react";
import style from "./Home.module.css";
import Navbars from "../components/Navbars";
import QnAPageStyle from "./QnA.module.css";
import Text from "../components/Text";
import VeteranSearchBox from "../components/clinic/VeteranInfoBox";
import Layout from "../components/Layout";
import styled from "styled-components";
import Footers from "../components/Footer"
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import {API_ENDPOINT} from "../config";

function ClinicPage() {
  const location = useLocation();
  const history = useHistory()
  const initKeyword = new URLSearchParams(location.search).get('keyword');

  const [currentTab, setCurrentTab] = useState('vet') // [vet, trainer]
  const [searchKeyword, setSearchKeyword] = useState(initKeyword)
  const [sortMethod, setSortMethod] = useState('recent') // [recent, visit]
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let apiUrl = `${API_ENDPOINT}/search/veteran/${currentTab}/${searchKeyword}?take=10`
    if (!initKeyword) {
      apiUrl = `${API_ENDPOINT}/search/veteran/${currentTab}?take=10`
    }
    axios.get(apiUrl)
      .then((res) => {
        setSearchResult(res.data);
        console.log(res.data);
        setLoading(false)
      }).catch(() => {
      alert('검색 에러!')
    })
  }, [initKeyword]);

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/clinic?keyword=${searchKeyword}`)
  }

  return (
    <div>
      <div className={style.containers}>
        <Navbars />

        <Layout>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
              <div style={{marginRight: 32}}>
                <Text n={'h2'} text={'상담'} />
              </div>

              <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center'}}>
                <ClinicTab style={{color: currentTab === 'vet' ? 'black' : 'gray'}}
                           onClick={() => setCurrentTab('vet')}>
                  수의사
                </ClinicTab>
                <ClinicTab style={{color: currentTab === 'trainer' ? 'black' : 'gray'}}
                           onClick={() => setCurrentTab('trainer')}>
                  훈련사
                </ClinicTab>
              </div>
            </div>
          </div>

          {/* TODO: search icon */}
          <div className={QnAPageStyle.QnAInputDiv}>
            <form onSubmit={handleSubmit} style={{width: '100%'}}>
              <input
                className={QnAPageStyle.QnAInput}
                value={searchKeyword}
                placeholder={'검색'}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </form>
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
              searchResult
                .sort((a, b) => b.reservations.length - a.reservations.length)
                .map((result) => (
                <VeteranSearchBox
                  name={result.name + ' ' + (result.type === 'vet' ? '수의사' : '훈련사')}
                  location={result.location}
                  shortDescription={result.short_description}
                  tags={Array.isArray(result.field) ? result.field : result.field.split(',')}
                  minutesPeriod={result.consult_items[0].minutes_period}
                  price={result.consult_items[0].price}
                  reviewNumber={result.reservations.length}
                  availableStatus={true}
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
export default ClinicPage;

const ClinicTab = styled.div`
  width: 96px;
  margin-top: auto;
  font-size: 20px;
  margin-bottom: 12px;
  cursor: pointer;
`