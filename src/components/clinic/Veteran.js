import searchStyle from './search.module.css';
import Text from "../Text";
import VeteranImg from '../../assets/veteran_img_1.png';


function VeteranSearchBox (questionSearchResult) {
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
                <Text n={'h6'} text={'이정연 수의사'} />
              </div>
              <div style={{margin: 'auto 0'}}>
                하나 동물 병원
              </div>
            </div>

            <div style={{marginBottom: 4}}>
              안녕하세요, 서울대 수의학과 출신 나연주입니다.
            </div>

            <div className={searchStyle.VeteranTagDiv}>
              <div className={searchStyle.VeteranTag}>
                건강 검진
              </div>
              <div className={searchStyle.VeteranTag}>
                슬개골 수술
              </div>
            </div>
          </div>

          <div style={{textAlign: 'right'}}>
            <div className={searchStyle.VeteranMoreInfoText} style={{flex: 1}}>
              15분 35,000원
            </div>
            <div style={{color: 'gray'}}>
              반려인이 남긴 후기 45개
            </div>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto'}}>
          <button className={searchStyle.VeteranButton}>
            준비중
          </button>
        </div>
      </div>
    </div>
  )
}

export default VeteranSearchBox