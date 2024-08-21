//  Modals
var html = '';

// Controller 
function multiplication()
{
    //  Initializie variables
    let multiply = (counter, by)=>counter * by;
    let increase = 2;
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
        html +=/*HTML*/`<tr><td>${increase}</td>`;

        //  Columns
        for(let j = 2; j <= 10; j++)
            {
                html +=/*HTML*/`<td>${multiply(j, increase)}</td>`;
            }

            increase ++;
    }

    //  
    html +=/*HTML*/`</tr>`;
    return html;
}

function countVowels(arg)
{

    //  Initialize an array
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
    Counting V0w3ls : ${count}<br> 
    formatted text : ->`;


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

function bagofitems()
{
    //  Initializing a bag with elements
    let bag = ['Hat', 'Pencil', 'Dinosaur', 'Showercap', 'Piece of Tape'];

    html = /*HTML*/` <div><ul>`;

    // add item to html
    for (let i = 0; i < bag.length; i++)
    {
        html += /*HTML*/`
            <li>${bag[i]} is at pocket ${i}</li>`;
    }

    html += /*HTML*/`
        </ul></div>`;

    document.getElementById('bag-item').innerHTML += html;
    return html;
}

function Socrates(arg)
{
    //  Initializing answers
    let veritas = [ 'Just allow it to be what it is, and attract the solution',
                    'Surrender the value to life, be integerious with the intentions. No more to do.',
                    'What are you really, deep down?',
                    'Just let it go, its not your challenge to resolve',
                    'Allow the challenge to be what it is, contemplate, ',
                    'Visualize the question, and the answer will arrive.',
                    'If an human is a genious, then The best answers always comes from with-in, just believe in your self enough.',
                    'As Socrates once said, you already know the answer of the question, as the idea of the question arised.',
                    'Would you be able to let it go?',
                    'A Question does not arise with out it\'s answer, so place your attention on where the question has arised',
                    'From where does the question actually arise? Your mind or heart?',
                    'Life is just like one of the elements on earth, just flow with it',
                    'Einstein said once "if the world were ending, and i had one hour to solve a problem " i would use 50 minutes to think about the issue, then use the 10 last minutes to solve the issue".',
                    'As the thought araises from with-in it can only be answered from with-in',
                    'Answers comes from with-in your self.',
                    'In gloria excelsius deo'];

    let falsus = [  'Thoughts are like a librarynth, you will be lost',
                    'Dear lost boy, thoughts are like a labarynth you won\'t find the exit, when you take the wrong turn',
                    'When you search after an answer with why, it\'s like searching for something which doesn\'t exists.',
                    'life is why',
                    'Things tends to be what it is, neither less or more, but equal to what it is.',
                    'The opposite sides of a die will always add up to seven.',
                    'The King of Hearts is the only king in a deck of cards without a mustache.',
                    'There is always an answer with-in, just compenplate on it',
                    'Alaska is the only state whose name is on one row on a keyboard.',
                    'A "jiffy" is about one trillionth of a second.',
                    'The ocean is blue',
                    'Mulan has the highest kill-count of any Disney character.',
                    'The infinity sign is called a lemniscate.',
                    'why do you ask me?. ',
                    "..."];

    let rules = ['what', 'how'];
    let recorded = [];
    arg = arg.split(' ');

    for (item of arg)
    {
        item.toLowerCase();
        for (rule of rules)
        {
            if (rule == item)
            {
                //  Append to html
                html = veritas[Math.floor(Math.random() * veritas.length)];
                    
                //  Append to a recorded list
                recorded.push(html);
    
            }
            else
            {
                //  Append in html
                html = falsus[Math.floor(Math.random() * falsus.length)];

                //  Append to a recorded list
                recorded.push(html);
            }

            }
            
        }

    //  Append html
    document.getElementById('response').innerHTML = html;
    return;
}

function addToCart()
{
    //  Initializing the array
    let cart = [];
    let element = document.getElementById('cart-item').innerHTML;


    //  append to cart
    cart.push(element);
    console.log(cart);

    //  append html
    html = /*HTML*/`<div><ul>`;

    for (let i = 0; i < cart.length; i++)
    {
        html += /*HTML*/
            `<li>${cart[i]}</li>`;
    }
    //  append html
    html += /*HTML*/`</ul></div>`;

    document.getElementById('shopping-cart').innerHTML += html;
}

//  View
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
                <h3>9.3 While-loop</h3>
                </div>
        </section>
        <section>
        <div id="bag-item">
            <h3>9.4.1 Arrays and forloops </h3>
        </div>
        <div id="product-item">
            <h3>9.4.2 Shopping-cart </h3>
            <div id="cart-item">Kakemonster</div>
            <button onclick="addToCart()">add to cart</button>
            <div id='shopping-cart'>
            <h3>Shopping cart</h3>
            </div>
        </div>
        <div id="8-ball">
            <h3>9.4.3 Philliosopher </h3>
            <input type="text" onchange="Socrates(this.value)">
            <div id ="response">
            </div>
    </div>
    <div id="regex">
        <h3>9.4.4 Regular expression </h3>
    </div>
    <div id="reaksjonstid">
        <h3>9.4.5 Reaksjonstid </h3>
    </div>
        </section>
`;
    id.innerHTML = html;
    findEqualNumber();
    bagofitems();

    return;

}


