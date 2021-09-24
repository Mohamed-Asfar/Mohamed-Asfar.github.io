
//Asks for name
function nameFunc(){
var name1 = prompt("Please enter your name here", "John Smith");
    document.write(name1);
}
//Asks for mood
function moodFunc(){
var condition = prompt("How are you doing", "Good, Great, etc.");
    document.write(condition);
}
//Displays date
function todayDate(){
var today = new Date();
    document.write(today.toDateString());
}
//Displays time
function todayTime(){
var time = new Date();
    document.write(time.toTimeString());
}

//5 buttons for company