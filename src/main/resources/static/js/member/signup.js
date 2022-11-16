
function setmember(){

    let info = {
        memail : document.querySelector('.memail').value ,
        mpassword : document.querySelector('.mpassword').value
    }

    $.ajax({
        url : "/member/setmember",
        type : "POST",
        data : JSON.stringify( info) ,
        contentType : "application/json",
        success : function(re) { alert(re) }
    })
}
// 2. 인증코드 요청
let auth = null;
function getauth(){
    // 1. 입력받은 이메일
    let toemail = document.querySelector('.memail').value
    // 2. 입력받은 이메일에게 인증코드 전송하고 전송된 인증코드를 반환
    $.ajax({
        url : "/member/getauth",
        data : { "toemail" : toemail } ,
        type : "get",
        success : function(re) {
            auth = re; // 응답받은 인증코드를 전역변수에 대입
            console.log( auth )
        }
    })


}













