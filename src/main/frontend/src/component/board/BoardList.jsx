import React , { useState , useEffect } from 'react'
import axios from 'axios'
import Pagination from 'react-js-pagination' // npm i react-js-pagination 설치

export default function BoardList(){
    const [ pageInfo , setPageInfo ] = useState({ bcno : 0 , page : 1 , key : "" , keyword:""  }) // 1. 요청 정보 객체 state
    const [ pageDto , setPageDto ] = useState( { list : [] } )                                // 1. 게시물 리스트 state
    const [ bcategory , setBcategoryList ] = useState( [ ] )                                      // 1. 카테고리 리스트
                                                    // [ ] : array/list     {  } : object/dto
    // ------------------------------  1. 게시물  -------------------------------------- //
    function getboardlist( ){ // 2. server : pageInfo 요청 => pageDto 응답 [ 실행조건 : 1. 렌더링될때 2.검색할때 3.카테고리선택 4.페이징 선택  ---> 일반 함수화 ]
        axios   .post( "/board/boardlist" ,  pageInfo )
                .then( res => {  console.log( res.data );  setPageDto( res.data );  } ).catch( err => { console.log( err ); } )
    }
    useEffect( getboardlist , [ pageInfo ] )  // 3. 렌더링 될때 그리고 *** pageInfo 변경될때 마다
    // -------------------------------------------------------------------------------- //
    // ------------------------------  2.카테고리 -------------------------------------- //
    function getBcategory(){ // 카테고리 리스트 가져오기
        axios.get("/board/bcategorylist")
            .then( res => { setBcategoryList( res.data ); } ) .catch( err => { console.log( err); } )
    }
    useEffect( getBcategory , [ ] ) // mount , unmount

    // 카테고리 버튼을 선택했을때
    const onCategory = ( bcno ) =>{ setPageInfo( { bcno : bcno , page : 1 , key : "" , keyword:""  } )  }
    // ------------------------------ --------------------------------------------------- //

    // ------------------------------  3.페이징  -------------------------------------- //
    const onPage = ( page ) =>{ setPageInfo( { bcno : pageInfo.bcno , page : page , key : "" , keyword:""  } )  }
                                                    // 기존 카테고리
    // ------------------------------ --------------------------------------------------- //

    return (
        <div>
            <a href="/board/write">글쓰기[로그인했을때만표시]</a>
            <h1> 글 목록 페이지 </h1>

            <div className="bcategorybox">
                {
                    bcategory.map( (c) => {
                        return (
                            <button type="button" onClick = { ()=> onCategory( c.bcno ) }>{c.bcname}</button>
                        )
                    })
                }
            </div>

            <table className="btable">
                {
                    pageDto.list.map( ( b ) => {
                        return (
                            <tr>
                                <td> { b.bno } </td>
                                <td> { b.btitle } </td>
                                <td> { b.memail } </td>
                                <td> { b.memail } </td>
                                <td> { b.bview } </td>
                            </tr>
                        )
                    } )
                }
            </table>

            <Pagination
                activePage={ pageInfo.page  }
                itemsCountPerPage = { 3 }
                totalItemsCount = { pageDto.totalBoards }
                pageRangeDisplayed = { 5 }
                onChange={ onPage }
            />

        </div>
    );
}