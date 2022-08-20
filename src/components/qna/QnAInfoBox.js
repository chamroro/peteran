import searchStyle from './search.module.css';
import QuestionIcon from '../../assets/Q.png';
import Text from "../Text";
import moment from "moment";
import {Link} from "react-router-dom";

function QnaSearchBox ({ id, title, author, createDatetime, veteran, otherAnswers }) {
  const duration = moment.duration(moment(createDatetime).diff(moment()));
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
          <div style={{flex: 1, textDecoration: 'none'}}>
            <Link to={`/qna/${id}`}>
              <Text n={'h6'} text={title} />
            </Link>
            {/* <Text n={'h6'} text={title} /> */}
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 1, paddingTop: "5px"}}>
              <span  className={searchStyle.QuestionAuthorText}>
                작성자
              </span>
              {author}
            </div>
            <div style={{color: 'gray'}}>
              {hours} 시간 전에 작성됨
            </div>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto', 
          alignItems: 'flex-end'}}>
          <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
            {
              otherAnswers ? (
                <>
                  <div style={{textAlign: 'right', flex: 1, marginRight:19}}>
                    답변
                  </div>
                  <div style={{color: "#238D9B"}}>
                    {veteran}
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