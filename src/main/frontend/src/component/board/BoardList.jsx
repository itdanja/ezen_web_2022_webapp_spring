import React , { useState , useEffect } from 'react'
import axios from 'axios'

export default function BoardList(){
    // 1. 메모리
    const [ pageInfo , setPageInfo ] = useState({ bcno : 0 , page : 1 , key : "" , keyword:""  })   // 1. 요청 정보 객체 state
    const [ boardlist , setBoardlist ] = useState([])                                               // 1. 게시물 리스트 state

    // 2. 서버로부터 게시물 리스트를 가져오는 함수 [ 실행조건 : 1. 렌더링될때 2.검색할때 3.카테고리선택 4.페이징 선택  ---> 일반 함수화 ]
    function getboardlist( ){
        axios   .post( "/board/boardlist" ,  pageInfo )
                .then( res => {  console.log( res.data );  setBoardlist( res.data );  } )
                .catch( err => { console.log( err ); } )
    }
    // 3. 렌더링 될때 그리고 *** pageInfo 변경될때 마다
    useEffect( getboardlist , [ setPageInfo ] )

    return (
        <div>
            <a href="/board/write">글쓰기[로그인했을때만표시]</a>
            <h1> 글 목록 페이지 </h1>
            <div className="bcategorybox"></div>
            <table className="btable"> </table>
        </div>
    );
}