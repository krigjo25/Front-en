function show() 
{
    let id = document.getElementById("task-wrapper");
    console.log(id)

    let html = /*HTML*/`
                    <tr>
                        <th>Oppgave</th>
                        <th>Done</th>
                        <th></th>
                    </tr>`;

    id.innerHTML = html;

    return;
}
show();