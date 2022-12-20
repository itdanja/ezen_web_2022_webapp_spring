/* 1.임포트 */
import React , {  useState , useEffect , useRef } from 'react';
import {useDaumPostcodePopup} from 'react-daum-postcode'; // npm i react-daum-postcode

// 3.컴포넌트[함수] 만들기
export default function RoomWrite( props ){
    /* ------------ 카카오 주소 api   -------------------*/
    // 0.검색된 주소 저장하는 state
    const [ address , setAddress ] = useState('');
    // 1. 다음 주소 API 사용하기 위한 API 스트립트
    const open  = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
    // 2. 주소 검색 버튼을 클릭했을때 이벤트
    const handleClick =  () => { open({ onComplete: handleComplete });  };
    // 3. 다음 주소 검색 결과 이벤트
    const handleComplete = (data) => { console.log(data.address); setAddress( data.address );    };

    /*---------- 카카오 지도 api ------------*/

        const mapContainer = useRef( null );    // 1. useRef() 재렌더링시 초기화 X
        const { kakao } = window;               // 2. window 객체 [ 현재 window 전역객체 -> 메모리 정보 담겨져 있는 객체 ]
        // 1. 상위에 있는 js에서 kakao 객체 필요
        // <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b7c0acb1395b016fc6b2661dad73840f"></script>

        const mapOption =  {                    // 3. 지도 옵션 [ 위치 , 확대 레벨 ]
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        useEffect( () => {                      // 4. 렌더링 할때마다 map 생성
                var map = new kakao.maps.Map( mapContainer.current , mapOption); // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
                // mapContainer.current : 지도가 표시되는 div
        })

    /* ------------------------------------*/


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

                {/*카카오 주소 api */ }
                위치[좌표] :
                        <div> { address } </div>
                        <button type='button' onClick={handleClick}>
                           방 위치 찾기
                         </button>

                {/*카카오 map api */ }
                {  /* jsx 스타일링[카멜표기법 margin-top -> marginTop ]
                        // style = { { 속성 : 값 , 속성 = 값 , 속성 = 값 }} */
                }
                <div
                    id="map"
                    ref={ mapContainer }
                    style={{width:'100%',height:'350px'}} >
                </div>
                <button type="button" onClick={ onWrite }>등록 </button>
            </form>
        </>
    )
    /* -------------------------------------------*/
}
