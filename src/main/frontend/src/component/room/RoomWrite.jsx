/* 1.임포트 */
import React , {  useState } from 'react';
import {useDaumPostcodePopup} from 'react-daum-postcode'; // npm i react-daum-postcode

// 3.컴포넌트[함수] 만들기
export default function RoomWrite( props ){
    /* ------------ 4.js , react[ 함수 , 지역변수]  -------------------*/
    // 0.검색된 주소 저장하는 state
    const [ address , setAddress ] = useState('');
    // 1. 다음 주소 API 사용하기 위한 API 스트립트
    const open
    = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
    // 2. 주소 검색 버튼을 클릭했을때 이벤트
    const handleClick =
    () => { open({ onComplete: handleComplete });  };
    // 3. 다음 주소 검색 결과 이벤트
    const handleComplete =
    (data) => { console.log(data.address); setAddress( data.address );    };
    // 4. 방 등록 버튼을 눌렀을대 이벤트
    const onWrite = () => { }
    /* ------------------------------------------ */
    /* ------------ 5. html or jsx표현식 { }------------------*/
    return(
        <>
            <h3> 방 등록 </h3>
            <form>
                방이름 : <input type="text" name="rtitle" />
                가격 : <input type="text" name="rprice" />
                거래방식 :
                    <select name="rtrans">
                        <option value="매매"> 매매 </option>
                        <option value="전세"> 전세 </option>
                        <option value="월세"> 월세 </option>
                    </select>
                이미지 : <input type="file" multiple="multiple" name="rimg" />
                위치[좌표] :
                        <div> { address } </div>
                        <button type='button' onClick={handleClick}>
                           방 위치 찾기
                         </button>
                <button type="button" onClick={ onWrite }>등록 </button>
            </form>
        </>
    )
    /* -------------------------------------------*/
}
