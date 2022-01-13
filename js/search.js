var gEPGSpace = {};

function getToday() {
    var today = new Date();
    var mm = (today.getMonth() + 1) + "";
    var dd = today.getDate() + "";
    var yyyy = today.getFullYear() + "";

    if(mm.length < 2) mm = "0" + mm;
    if(dd.length < 2) dd = "0" + dd;

    return yyyy + "" + mm + dd;
}

function search()
{
    $.ajax("/epg/olleh/"+getToday()).done(function(data) {
        $("#container_head").html("검색 결과는 아래와 같습니다.");
        $("#container").html(data);
    });
}


$(document).ready(function() {
    $.ajax("/epg/olleh/"+getToday()).done(function(data) {
        gEPGSpace = data;
    });
    

});
