//  Modal
var html = "";
var start = new Date().getTime();

function generatelight()
{
    return Math.floor(Math.random() * 25 );
}

function calculate()
{
        // calculate time
        console.log(start)
        let sec = (ms) => ms / 1000;

        let finish = new Date().getTime();

        console.log(sec(Math.floor(finish - parseInt(start))));
}

// Controller
function activelight()
{

    //  Generate a random number
    let random = generatelight();

    //  Fetch id
    let parent = document.getElementById('main').children;

    //  Toggle elements
    for(let i = 0; i < parent.length; i++)
    {
        //  Ensure the element has the class "on"
        if (parent[i].classList.contains('on'))
        {
            //  toggle
            parent[i].classList.toggle('on');
            parent[i].classList.toggle('off');


            // adapted from https://www.w3schools.com/jsref/met_element_removeattribute.asp
            parent[i].removeAttribute('onclick');
        }
    }

    // toggle spesific values to on / off.
    parent[random].classList.toggle('off');
    parent[random].classList.toggle('on');

    // adopted from https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    parent[random].setAttribute('onclick', "activelight()");

    // Calculate time
     calculations =[];
     calculations.push(calculate(start));
    
     // send feedback for the user
    html += /*HTML*/`
        <div> Time used on round ${$i} : ${calculations[i]}</div>`;
    document.getElementById('');

    return;
}

//  View
function updateView()
{
    for(let i = 0; i < 25; i++)
    {
        // onclick element on one of 25
        html += /*HTML*/`<div class="off"></div>`;
    }
    return html;
}

function main()
{
    html = updateView();
    
    document.getElementById('main').innerHTML += html;
    activelight();
}