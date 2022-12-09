import React , { useState , useEffect } from 'react'
import axios from 'axios'
export default function BoardWrite( props ) {

    const [ category , setCategory ] = useState('');    // 입력받은 카테고리명
    const [ categoryList , setCategoryList ] = useState([]);    // 서버로부터 가져온 카테고리 리스트

    // 1. 모든 카테고리 가져오기 함수 [ 실행조건 : 페이지가 [열렸을때] 렌더링 되었을때 ]
    const getbcategory = () => {
        axios
            .get("/board/bcategorylist")
            .then( res => { setCategoryList( res.data ); console.log( res)  } )
            .catch( err => { console.log( err); } )
    }
    useEffect( getbcategory , [] ); // 페이지가 mount , unmount

    // 2. 입력된 카테고리 등록 함수 [ 실행조건 : 카테고리 등록 버튼 눌렀을때 ]
    const setbcategory = () => {
        if( category == '' ){ alert("카테고리명을 입력후 등록해주세요"); return; }
        axios
            .post( "/board/setbcategory" ,  { bcname : category } )
            .then( res => {
                if( res.data == true ) { alert("카테고리 등록성공"); console.log( res ) }
                else{ alert("카테고리 등록실패");  }
             })
            .catch( err => { console.log( err); } )
    }
    const setboard = () => { alert('게시물 추가합니다.'); }
    return (
        <div>
            <h1> 글쓰기 페이지 </h1>
            <input type="text" value = {category} onChange={ (e)=> { setCategory(e.target.value ) }  } />
            <button type="button" onClick={ setbcategory }>카테고리추가</button>
            <div className="bcategorybox">  </div>

            <form className="boardform" >
                제목 : <input type="text" name="btitle" />
                내용 : <input type="text" name="bcontent" />
                첨부파일 : <input type="file" name="bfile" />
                <button type="button" onClick={ setboard } >등록</button>
            </form>


        </div>
    );
}

    /*
        1. class => className ,
        2. onclick => onClick ,
        3. <태그> </태그>  , <태그 /> ,
        4. setbcategory() -> { 변수명 }
     */