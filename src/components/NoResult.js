import No from '../assets/noresult.png';
import Text from "./Text";

function NoResult(){
    
    return(
        <div style={{margin: '0 auto', height: '500px', display: 'flex',
        justifyContent : 'center', flexDirection: 'column'}}>
            <img src={No}
                alt={'No result!'}
            style={{margin: '0 auto', width: 80, height: 80, marginBottom:50}} />
            <div style={{margin: '0 auto'}}><Text n='s1' text="검색 결과가 없습니다"/></div>
        </div>
    );

}

export default NoResult;

