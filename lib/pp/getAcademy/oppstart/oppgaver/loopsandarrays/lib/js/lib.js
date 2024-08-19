

//  Controller->

function higlightText()
{
    //  Initializie id
    let id = document.getElementById('multiplication-table')
    let td = document.querySelectorAll('td');

    for (i of td)
    {
        if (i.textContent == "2")
        {}
    }
}
function multiplication()
{
    //  Initializie variables
    let multiply = 2
    let html = /*HTML*/`<tr>`;

    //  Loop through the rows
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

//  View
function main()
{
    //  Initializing the html id & table
    let id = document.getElementById('multiplication');
    let html = /*HTML*/`
    <table id="${id}">
        ${multiplication()}
    </table>`;

    id.innerHTML = html;
}