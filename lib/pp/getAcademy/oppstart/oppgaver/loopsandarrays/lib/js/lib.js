

//  Controller->
function multiplication()
{
    //  Initializing 
    let html = ``;

    //  Multiplication table
    for (let i= 0; i < 2; i++)
    {
        // row
        html = /*HTML*/`<tr>`
        
        //Column
        for(let j = 0; j < 10; j++)
        {
            html += /*HTML*/ `<td>${j}</td>`;

        }
        html += /*HTML*/`</tr>`
    }
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