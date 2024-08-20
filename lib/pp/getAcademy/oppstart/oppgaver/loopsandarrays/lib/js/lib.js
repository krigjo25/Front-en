//  Modals
let html = '';

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

    //  Initial arguments
    string = arg.value;
    count = 0;

    //  Find vowel
    for (let i = 0; i < string.length; i++){

        // Ensure the arg value to be a vowel
        // How can i define a vowel
        if (string.charAt(i).toLowerCase() = 'a')
        {
            count++;
        }
        else if (string.charAt(i).toLowerCase() = 'e')
        {
            count++;
        }
        else if (string.charAt(i).toLowerCase() = 'i')
        {
            count++;
        }
        else if (string.charAt(i).toLowerCase() = 'o')
        {
            count++;
        }
        else if (string.charAt(i).toLowerCase() = 'u')
        {
            count++;
        }
        else if (string.charAt(i).toLowerCase() = 'y')
        {
            count++;
        }
        else if (string.charAt(i).toLowerCase() = 'æ')
        {
            count++;
        }
        else if (string.charAt(i).toLowerCase() = 'ø')
        {
            count++;
        }
        else if (string.charAt(i).toLowerCase() = 'å')
        {
            count++;
        }
    }
    //  Count vowel
    html = /*HTML*/`
    <div>
    ${arg.value}<br> has ${count} vowels
    </div>`;
    return html;
}

//  View
function vowels()
{
    html = /*HTML*/`
    <div id='v0w31s'>
        <h3>V0w31s</h3>
        <div id="v0vls">
        <input onchange="countVowels(this)" type="text">
        string <br> has ${countVowels()} vowels
        </div>
    </div>`;
    return html;
}

function multiplicationTable()
{
    let html = /*HTML*/`
    <div id='multiplication'>
        <h3> Multiplication Table</h3>
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
    </div>`;
    return html;
}

function main()
{
    //  Initializing the html id & table
    let id = document.getElementById('main');
    html = /*HTML*/`
    <section>
     ${multiplicationTable()}
     ${vowels()}
     </section>`;

    id.innerHTML = html;
}