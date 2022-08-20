import searchStyle from './search.module.css';
import Text from "../Text";
import VeteranImg from '../../assets/veteran_img_1.png';


function VeteranSearchBox ({ name, location, shortDescription, tags, minutesPeriod, price, reviewNumber, availableStatus}) {
  return (
    <div className={searchStyle.SearchBoxDiv}>

      <div style={{paddingLeft: 32, margin: 'auto 0', width: 100}}>
        <img src={VeteranImg}
             alt={'veteran_img'}
             style={{width: 64, height: 64}}
             // style={searchStyle.QuestionIcon}
        />
      </div>

      <div style={{padding: 27, display: 'flex', flexDirection: 'row', flex: 1}}>
        <div style={{display: 'flex', flexDirection: 'row', paddingRight: 52, flex: 1}}>
          <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <div style={{marginRight: 10}}>
                <Text n={'h6'} text={name} />
              </div>
              <div style={{margin: 'auto 0'}}>
                {location}
              </div>
            </div>

            <div style={{marginBottom: 4}}>
              {shortDescription}
            </div>

            <div className={searchStyle.VeteranTagDiv}>
              {
                tags.map((tag) => (
                  <div className={searchStyle.VeteranTag} key={tag}>
                    {tag}
                  </div>
                ))
              }
            </div>
          </div>

          <div style={{textAlign: 'right'}}>
            <div className={searchStyle.VeteranMoreInfoText} style={{flex: 1}}>
              {minutesPeriod}분 {Number(price).toLocaleString()}원
            </div>
            <div style={{color: 'gray'}}>
              반려인이 남긴 후기 {reviewNumber}개
            </div>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto'}}>
          <button className={searchStyle.VeteranButton}>
            {availableStatus ? '예약하기' : '준비중'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VeteranSearchBox