
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

//1st
function breakfastFunc(){
var totalMoney = prompt("How much money do you have :)",1000);
var foodMoney = prompt("How much was your breakfast today?", 101);
var newfMoney = totalMoney - foodMoney;
    alert("This is how much money you have now, unless you made breakfast at home which was probably smart but oh well:)" + newfMoney);
}

//2nd
function lunchFunc(){
var totalMoney = prompt("How much money do you have :)",1000);
var foodMoney = prompt("How much was your lunch today?", 101);
var newlMoney = totalMoney - foodMoney;
    alert("This is how much money you have now, unless you made a lunch at home which was probably smart but oh well:)" + newlMoney);
}

//3rd
function DinnerFunc(){
var totalMoney = prompt("How much money do you have :)",1000);
var foodMoney = prompt("How much was your dinner today?", 101);
var newdMoney = totalMoney - foodMoney;
    alert("This is how much money you have now, unless you made dinner at home which was probably smart but oh well:)" + newdMoney);
}

//4th
function averageTot(){
var breakMon =prompt("How much do u usually spend on breakfast?", 10);
var lunchMon =prompt("Lunch?", 10);
var dinnerMon =prompt("Dinner?", 10);
var avgMeal = (breakMon + lunchMon + dinnerMon)/3;
var totalAvg = avgMeal*3;
    alert("Welp this is your average per meal: "+ avgMeal + "And this is what you pay on average if you buy 3 meals a day: " + totalAvg);
}

//5th
function loseMoney(){
var puts = prompt("What is your favorite stock/ETF?", "SPY");
    alert("None of that matters, the only real way to make money is 'investing' all of your hard earned cash into out of the money SPY puts gl brother");
}