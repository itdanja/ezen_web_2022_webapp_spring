

// 1. 게시물 출력
boardlist()
function boardlist(){
    $.ajax({
        url : "/board/boardlist",
        type : "get",
        success : function(list) {
            let html = '<tr>  <th> 번호 </th> <th> 제목 </th> <th> 작성자 </th></tr>';
            list.forEach( (b) => {
                html +=
                '<tr>  <td> '+b.bno+' </td> <td> '+b.btitle+' </td> <td> '+b.mno+' </td></tr>';
            })
            document.querySelector(".btable").innerHTML = html;
        }
    })
}












