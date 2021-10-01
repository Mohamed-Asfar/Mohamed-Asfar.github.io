// alert introducing funcitonality
alert("The Mad Aye Aye would like a number to determine the amount of sides and give you what polygon it represents!");

// Validates the entry
function validateEntry(x)
{

var x;
if( x >= -10 && x <= 10)
{
    Math.abs(x);
    Math.round(x);
}
else
{
    alert("Please re-enter a number 0-10");
    getShape();
}
}


// Takes user input and returns shape name
function getShape()
{

var num;

var polygon = prompt("Please enter your number: ", 1);



validateEntry(polygon);

switch(true)
{
    case polygon == 0:
        num = "Circle!";
        break;

    case polygon == 1:
        num = "Monogon!";
        break;

    case polygon == 2:
        num = "Bigon!";
        break;

    case polygon == 3:
        num = "Triangle!";
        break;

    case polygon == 4:
        num = "Quadrilateral!";
        break;

    case polygon == 5:
        num = "Pentagon!";
        break;

    case polygon == 6:
        num = "Hexagon!";
        break;

    case polygon == 7:
        num = "Heptagon!";
        break;

    case polygon == 8:
        num = "Octagon!";
        break;

    case polygon == 9:
        num = "Nonagon!";
        break;

    case polygon == 10:
        num = "Undecagon!";
        break;

}


alert("Your polygon is a: " + num);

}

