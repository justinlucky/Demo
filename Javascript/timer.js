var countDown = 20;
var countdownElement = document.getElementById('countdown');
var timer = setInterval(function(){
    countDown--;
    countdownElement.textContent=countDown;
    if (countDown === 0){
        clearInterval(timer);
        countdownElement.textContent = 'Time up';
    }
},1000);

//local time function
function updateLocalTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    hours = (hours < 13 ? '' : '') + hours;
    minutes = (minutes < 61 ? '' : '') + minutes;
    seconds = (seconds < 61 ? '' : '') + seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('localTime').textContent = 'Local time is =' + timeString;
}
setInterval(updateLocalTime, 1000);
updateLocalTime();

//local date function
function updateLocalDate(){
    var currentTime = new Date();
    var day = currentTime.getDate();
    var month = currentTime.getMonth();
    var year = currentTime.getFullYear();
    year = (year < 2100 ? '' : '') + year;
    month = (month < 13 ? '' : '') + (month + 1);
    day = (day < 32 ? '' : '') + day;
    var dateString = day + '/' + month + '/' + year;
    document.getElementById('localDate').textContent = 'Local date is =' + dateString;
}
setInterval(updateLocalDate, 1000);
updateLocalDate();

// location function
function rakesh() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log('Geolocation is not suppoerted in your browswer');
    }
}
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById('latitude').textContent = latitude;
    document.getElementById('longitude').textContent = longitude;
}
rakesh();

//direct addition
var a = 20;
var b = 30;
var c = a + b;
console.log(c);

//function method
function sum(){
    var num1 = 70;
    var num2 = 70;
    var res = num1 + num2;
    console.log(res);
}
sum();

//function method *best method
const add = () => {
    console.log(30 + 70);
}
add();
