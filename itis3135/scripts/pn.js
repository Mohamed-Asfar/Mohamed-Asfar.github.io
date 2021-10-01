// alert introducing funcitonality
alert("The Mad Aye Aye would like a number to determine the amount of sides and give you what polygon it represents");
// Takes user input and returns shape name
function getShape()
{

let num;

var polygon = prompt("Please enter your number: ", 0-10);

switch(polygon)
{
    case 0:
        num = "Circle!";
        break;

    case 1:
        num = "Monogon!";
        break;

    case 2:
        num = "Bigon!";
        break;

    case 3:
        num = "Triangle!";
        break;

    case 4:
        num = "Quadrilateral!";
        break;

    case 5:
        num = "Pentagon!";
        break;

    case 6:
        num = "Hexagon!";
        break;

    case 7:
        num = "Heptagon!";
        break;

    case 8:
        num = "Octagon!";
        break;

    case 9:
        num = "Nonagon!";
        break;

    case 10:
        num = "Undecagon!";
        break;

}

alert("Your polygon is: " + num);

}

// Validates the entry
function validateEntry()
{

}