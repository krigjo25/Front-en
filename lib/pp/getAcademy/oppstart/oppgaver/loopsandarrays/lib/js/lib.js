

//  Controller->
function multiplication()
{
    //  Initializing variable
    let html = null;

    //  Multiplication table

    for (let i = 0; i < 10; i++)
    {
        // row
        html += /*HTML*/`<tr>`
        
        //Column
        for(let j = 0; j <= 10; j++)
        {
            html += /*HTML*/ 
            `<td>${j}</td>`;

        }
        html += /*HTML*/
        `</tr>`
    }

    return html;
}


//  View
function main()
{
    //  Initializing the html id & table
    let id = document.getElementById('multiplication');
    let html = /*HTML*/`
    <table id = ${id}>
        ${multiplication()}
    </table>`

    id.innerHTML = html;
}