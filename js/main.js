function goToToday(_stbid)
{
    var today = new Date();
    var mm = (today.getMonth() + 1) + "";
    var dd = today.getDate() + "";
    var yyyy = today.getFullYear() + "";

    if(mm.length < 2) mm = "0" + mm;
    if(dd.length < 2) dd = "0" + dd;

    var location = "/epg";
    switch(_stbid)
    {
        case "OLLEH":
        location += "/olleh/";
        break;
        case "BTV":
        location += "/btv/";
        break;
        case "UPLUS":
        location += "/uplus/";
        break;
    }

    location += (yyyy + "" + mm + dd);

    document.location.href = location;
}
