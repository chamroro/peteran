import {useState} from "react";
import style from "./Home.module.css";
import Navbars from "../components/Navbars";
import QnAPageStyle from "./QnA.module.css";
import Text from "../components/Text";
import VeteranSearchBox from "../components/clinic/VeteranInfoBox";
import Layout from "../components/Layout";
import styled from "styled-components";
import Footers from "../components/Footer"

function ClinicPage() {
  const [currentTab, setCurrentTab] = useState('vet') // [vet, trainer]
  const [searchKeyword, setSearchKeyword] = useState('슬개골 탈구')
  const [sortMethod, setSortMethod] = useState('recent') // [recent, visit]

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
                <VeteranSearchBox
                  name={'이정연 수의사'}
                  location={'하나 동물 병원'}
                  shortDescription={'안녕하세요, 포항공대 수의학과 출신 나연주입니다. 0.<'}
                  tags={['건강 검진', '슬개골 수술']}
                  minutesPeriod={15}
                  price={35000}
                  reviewNumber={4}
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