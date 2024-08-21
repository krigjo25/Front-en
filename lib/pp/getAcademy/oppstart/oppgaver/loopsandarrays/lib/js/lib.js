//  Modals
var html = '';

// Controller 
function multiplication()
{
    //  Initializie variables
    let multiply = 2;
    html = /*HTML*/`<tr>`;

    //  Table header
    for(let i = 1; i <= 10; i++)
        {
            html +=/*HTML*/`<td>${i}</td>`;
        
        }
    html += /*HTML*/`</tr>`;

    // Rows
    for(let i = 2; i <= 10; i++)
    {
        html +=/*HTML*/`<tr><td>${multiply}</td>`;

        //  Columns
        for(let j = 2; j <= 10; j++)
            {
                html +=/*HTML*/`<td>${j* multiply}</td>`;
            }

            multiply ++;
    }

    //  
    html +=/*HTML*/`</tr>`;
    return html;
}

function countVowels(arg)
{

    //  Initialize an array
    /*arr = [   'a','e','i','o','u', "y", "æ", "ø", "å",
        'A','E','I','O','U', "Å"
    ]*/
    string = arg;
    arg = arg.toLowerCase();

    //  Initial arguments
    count = 0;

    //  Find vowel
    
    for (let i = 0; i <= arg.length; i++){

        //  Ensure the value contains -> a vowel
        if (arg[i] == "a")
        {
            count++;
        }
        else if (arg[i] == "e")
        {
            arg[i].replace("r", arg[i]);
            count++;
            console.log(arg[i])
        }
        else if (arg[i] == "i")
        {
            count++;
        }
        else if (arg[i] == "o")
        {
            count++;
        }
        else if (arg[i] == "u")
        {
            count++;
        }
        else if (arg[i] == "y")
        {
            count++;
        }
        else if (arg[i] == "æ")
        {
            count++;
        }
        else if (arg[i] == "ø")
        {
            count++;
        }
        else if (arg[i] == "å")
        {
            count++;
        }
    }
    document.getElementById('main')
    document.getElementById('v0w3lCount').innerHTML = /*HTML*/`
    Original text : <b>${string}</b><br>
    Counting words : ${count}<br> `;


    return;
}

function findEqualNumber()
{
    //  Initialize a counter
    let count = 0;

    //  Initialize random number
    let n = Math.floor(Math.random()* 10); 
    let x = Math.floor(Math.random()* 10);
    console.log()

    //  While n and x is not equal generate random number
    while(n != x)
    {
        
        //  Generate number
        n = Math.floor(Math.random()* 10); 
        x = Math.floor(Math.random()* 10);
        //  Count how many attempts it takes to find equal number
        count ++;

        //  Testing the program behaves as expected
        console.log(n,x);
    }

    //  Fetch ids
    document.getElementById('equality').innerHTML += /*HTML*/`Found out that ${n} equals ${x} took ${count} loops to get to that answer`;


    return;
}

//  Hoved view
function main()
{
    //  Initializing the html id & table
    let id = document.getElementById('main');

    html = /*HTML*/`
    <section>
        <div id='multiplication'>
            <h3> 9.1 Multiplication Table</h3>
            <table>

                <th>x1</th>
                <th>x2</th>
                <th>x3</th>
                <th>x4</th>
                <th>x5</th>
                <th>x6</th>
                <th>x7</th>
                <th>x8</th>
                <th>x9</th>
                <th>x10</th>
                <tbody>
                    ${multiplication()}
                </tbody>
            </table>
        </div>
    </section>
    <section>
        <div id="v0w3ls">
        <h3> 9.2 V0w3ls</h3>
        Counting vowels :
            <input type=text, onchange="countVowels(this.value)">
            <div id="v0w3lCount"></div>
        </div>
    </section>
    <section>
        <div id="equality">
        <h3>9.3 While-loop</h3></div>
    </section>
    
`;
    id.innerHTML = html;
    findEqualNumber();


    
    return;
    
}