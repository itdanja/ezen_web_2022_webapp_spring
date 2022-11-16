
getloginMno();

function getloginMno(){
    $.ajax({
        url : "/member/getloginMno" ,
        type : "get" ,
        success : function(re) {
            let headerbox = '';
            if( re == "0" ){ // 로그인 안했다 ..
                headerbox +=
                        '<a href="/member/signup"><button type="button"> 회원가입 </button></a>'+
                        '<a href="/member/login"><button type="button"> 로그인 </button></a>'
            }
            else{  // 로그인 했다.. [ 회원번호가 0 이 아니면 ]
                 headerbox +=
                        '<a href="/member/logout"><button type="button" onclick="logout()"> 로그아웃 </button></a>'+
                        '<a href="/member/findpassword"><button type="button"> 비밀번호찾기 </button></a>'+
                        '<a href="/member/delete"><button type="button"> 비밀번호수정 </button></a>'+
                        '<a href="/member/update"><button type="button"> 회원탈퇴 </button></a>'
            }
            document.querySelector(".headerbox").innerHTML = headerbox;

        }
    })
}

// 로그아웃 [ 서버에 있는 세션 초기화 ]
function logout(){
    $.ajax({
        url : "/member/logout" , //  요청url
        type : "get" , // 요청 메소드
        success : function(re){ // 응답
            location.href="/"; // index.html 반환 해주는 매핑 주소
                // location.href = URL
        }
    })
}













