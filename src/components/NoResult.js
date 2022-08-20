import No from '../assets/noresult.png';
import Text from "./Text";

function NoResult(){
    
    return(
        <div>
            <img src={No}
                alt={'No result!'}
            style={{width: 80, height: 80}} />
            <Text n='s1' text="검색 결과가 없습니다"/>
        </div>
    );

}

export default NoResult;

