import searchStyle from './search.module.css';
import QuestionIcon from '../../assets/Q.png';
import Text from "../Text";
import moment from "moment";
import {Link} from "react-router-dom";

function QnaSearchBox ({ id, title, author, createDatetime, veteran, otherAnswers }) {
  const duration = moment.duration(moment().diff(moment(createDatetime)));
  const hours = duration.asHours();

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
            <Link to={`/qna/${id}`} style={{textDecoration: 'none', color: '#238d9b'}}>
              <Text n={'h6'} text={title} />
            </Link>
            {/* <Text n={'h6'} text={title} /> */}
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 1}}>
              <span className={searchStyle.QuestionAuthorText}>
                작성자
              </span>
              {author}
            </div>
            <div style={{color: 'gray'}}>
              {Number(hours).toFixed()} 시간 전에 작성됨
            </div>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto'}}>
          <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
            {
              otherAnswers ? (
                <>
                  <div>
                    {veteran}
                  </div>
                  <div style={{fontWeight: 'bold', textAlign: 'right', flex: 1}}>
                    답변
                  </div>
                </>
              ) : (
                <div>
                  답변 없음
                </div>
              )
            }
          </div>
          다른 전문가 답변 {otherAnswers}개
        </div>
      </div>

    </div>
  )
}

export default QnaSearchBox