import {useState} from "react";
import style from "./Home.module.css";
import Navbars from "../components/Navbars";
import QnAPageStyle from "./QnA.module.css";
import Text from "../components/Text";
import VeteranSearchBox from "../components/clinic/Veteran";

function QnAPage() {
  const [currentTab, setCurrentTab] = useState('vet') // [vet, trainer]

  return (
    <div>
      <div className={style.containers}>
        <Navbars />

        <div className={QnAPageStyle.QnAPageLayout}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
              <div style={{marginRight: 32}}>
                <Text n={'h2'} text={'상담'} />
              </div>

              <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center'}}>
                <div style={{width: 96, marginTop: 'auto', fontSize: 20, marginBottom: 12, color: 'gray'}}>
                  수의사
                </div>
                <div style={{width: 96, marginTop: 'auto', fontSize: 20, marginBottom: 12}}>
                  훈련사
                </div>
              </div>
            </div>
          </div>

          {/* TODO: search icon */}
          <div className={QnAPageStyle.QnAInputDiv}>
            <input
              className={QnAPageStyle.QnAInput}
              value={'슬개골 탈구'}
            />
          </div>

          <div style={{textAlign: 'right', marginBottom: 12, gap: 12, display: 'flex'}}>
            <label><input type="radio" name="fruit" value="apple" checked/> 최신 답변순</label>
            <label><input type="radio" name="fruit" value="banana"/> 조회순</label>
          </div>

          <div style={{display: "flex", flexDirection: 'column', gap: 20}}>
            <VeteranSearchBox/>
            <VeteranSearchBox/>
            <VeteranSearchBox/>
            <VeteranSearchBox/>
          </div>

        </div>
      </div>
    </div>
  )

}
export default QnAPage;