// ------------------------------------------------- //
function getMapping1() {
    $.ajax({
        url:"/api/v1/get-api/hello" ,
        success: function(re) { alert(re); }
    })
}

function getMapping2() {
    $.ajax({
        url : "/api/v1/get-api/name" ,
        success: function(re) { alert(re); }
    })
}
// ------------------------------------------------- //
function postMapping1(){
    $.ajax({
        url : "/api/v1/post-api/domain",
        type : "POST",
        success: function(re) { alert(re); }
    })
}

function postMapping2(){
    let member = {   name : "유재석" ,  email : "qweqwe@qweqwe", organization : "qweqweqwe"}
    $.ajax({
        url : "/api/v1/post-api/member",
        type : "post",
        data : JSON.stringify(member) ,
        contentType : "application/json" ,  // 전송타입 : application/json
        success: function(re) { alert(re); }
    })
}

function postMapping3(){
    let member = {   name : "유재석" ,  email : "qweqwe@qweqwe", organization : "qweqweqwe"}
    $.ajax({
        url : "/api/v1/post-api/member2",
        type : "post",
        data : JSON.stringify(member) ,
        contentType : "application/json" ,  // 전송타입 : application/json
        success: function(re) { alert(re); }
    })
}

// ------------------------------------------------- //
function putMapping1(){
    let member = {   name : "유재석" ,  email : "qweqwe@qweqwe", organization : "qweqweqwe"}
    $.ajax({
        url : "/api/v1/put-api/member",
        type : "PUT",
        data : JSON.stringify(member),
        contentType : "application/json",
        success : function(re) { alert(re); }
    })
}

function putMapping2(){
    let member = {   name : "유재석" ,  email : "qweqwe@qweqwe", organization : "qweqweqwe"}
    $.ajax({
        url : "/api/v1/put-api/member1",
        type : "PUT",
        data : JSON.stringify(member),
        contentType : "application/json",
        success : function(re) { console.log( re ) }
    })
}

function putMapping3(){
    let member = {   name : "유재석" ,  email : "qweqwe@qweqwe", organization : "qweqweqwe"}
    $.ajax({
        url : "/api/v1/put-api/member2",
        type : "PUT",
        data : JSON.stringify(member),
        contentType : "application/json",
        success : function(re) {
           console.log( re );
           console.log( re.name );
           // let json =  JSON.parse( re ); console.log( json );
        }
    })
}
// -------------------------------------------------------------------- //
function deletemapping1(){
    $.ajax({
        url : "/api/v1/delete-api/하하하하하하1",
        type : "DELETE",
        success : function(re) { alert(re); }
    })
}
function deletemapping2(){
    $.ajax({
        url : "/api/v1/delete-api/request1?variable=하하하하하하2",
        type : "DELETE",
        success : function(re) { alert(re); }
    })
}














