var d = new Date();

function dataRealTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if(s < 10)
    {
        s = "0" + s;
    }
    if(m < 10)
    {
        m = "0" + m;
    }
    if(h < 10)
    {
        h = "0" + h;
    }
    var time = h + ":" + m + ":" + s ;

    document.getElementById("demo1").innerHTML= time;
}
setInterval(dataRealTime,1000)

var dayOfWeek = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
var data = dayOfWeek[d.getDay()];
document.getElementById("demo").innerHTML= data;

var Month = ["January" , "Febraury" , "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var monthDate = Month[d.getMonth()];
var year = d.getFullYear();
var day = d.getDate();

var total = day + " " + monthDate + " " + year ;
document.getElementById("demo2").innerHTML=total;