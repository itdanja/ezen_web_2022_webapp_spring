// 컴포넌트 만들기
// 1. 컴포넌트 이름은 첫글자가 대문자 시작
    // 1. 파일명과 컴포넌트 이름 동일하게
    // Comment.jsx == function Comment(){}
// 2. 준비물
    // 1. 상단 : import React from 'react'
    // 2. 하단 : export default 컴포넌트명
// 3. 컴포넌트 = 함수
    // 1. 입력 : props [ 매개변수 = 속성객체 ]
    // 2. 출력 : return [ 엘리먼트 = 가상 DOM ]
// 1.
import React from 'react'
// 2.
function Comment( props ){
    return(
        <div><h1>제가 만든 첫 컴포넌트 입니다.</h1></div>
    )
}
// 3.
export default Comment








