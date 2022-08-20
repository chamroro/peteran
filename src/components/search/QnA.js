import searchStyle from './search.module.css';
import QuestionIcon from '../../assets/Q.png';
import Text from "../Text";

function QnaSearchBox (questionSearchResult) {
  return (
    <div className={searchStyle.SearchBoxDiv}>

      <div style={{paddingLeft: 32, margin: 'auto 0', width: 100}}>
        <img src={QuestionIcon}
             alt={'question_icon'}
             style={{width: 64, height: 64, padding: 16}}
             // style={searchStyle.QuestionIcon}
        />
      </div>

      <div style={{padding: 27, display: 'flex', flexDirection: 'row', flex: 1}}>
        <div style={{display: 'flex', flexDirection: 'column', paddingRight: 24, flex: 1}}>
          <div style={{flex: 1}}>
            <Text n={'h6'} text={'5세 여아 말티즈(중성화X), 슬개골 탈구된 것 같아요'} />
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 1}}>
              <span className={searchStyle.QuestionAuthorText}>
                작성자
              </span>
              뭉이
            </div>
            <div>
              2시간 전에 작성됨
            </div>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto'}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
          <div>
            강형욱 훈련가
          </div>
          <div style={{fontWeight: 'bold', textAlign: 'right', flex: 1}}>
            답변
          </div>
        </div>
        다른 전문가 답변 4개
      </div>
      </div>

    </div>
  )
}

export default QnaSearchBox