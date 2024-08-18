//  Initializing the variables | Modals
let name = "Kristoffer";
let city = "Mysen";
let food = "Chicken";

//  Controlling the change
function setName(arg)
{
    name = arg;
    setField();
}
//  View
function setField()
{
    document.getElementById("name").innerHTML = name;
    document.getElementById("city").innerHTML = city;
    document.getElementById("food").innerHTML = food;
}
