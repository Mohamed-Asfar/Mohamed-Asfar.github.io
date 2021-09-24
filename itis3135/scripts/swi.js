
function nameFunc(){
var name1 = prompt("Please enter your name here", "John Smith");
document.write(name1);
}
function moodFunc(){
var condition = prompt("How are you doing", "Good, Great, etc.");
document.write(condition);
}

function todayDate(){
    var today = new Date();
    document.write(today.toDateString());
}
function todayTime(){
    var time = new Date();
    document.write(time.toTimeString());
}
