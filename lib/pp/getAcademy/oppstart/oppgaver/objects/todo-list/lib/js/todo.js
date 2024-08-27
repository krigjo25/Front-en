//  Terje
// Model
    var tasks = [
        { description: 'Handle til middag', isDone: true, deadline:"", timestamp:"", assigned:""  },
        { description: 'Lage middag', isDone: false, deadline:"", timestamp:"", assigned:""},
        { description: 'Spise middag', isDone: false, deadline:"", timestamp:"", assigned:""},
    ];

    // Controller

    function addTask() {
        let taskDescriptionInput = document.getElementById('taskDescription');
        tasks.push({
            description: taskDescriptionInput.value,
            isDone: false
        });
        taskDescriptionInput.value = '';
        show();
    }

    // View

    show();

    function show() 
    {
        let tasksTable = document.getElementById("task-wrapper");

        let html = /*HTML*/`
                        <tr>
                            <th>Oppgave</th>
                            <th>Done</th>
                            <th></th>
                            <th>asigned to</th>
                            <th>Deadline</th>
                            <th>TimerStamp</th>
                            <th></th>

                        </tr>`;

        for (let i = 0; i < tasks.length; i++) {

            html += createHtmlRow(i);

        }

        tasksTable.innerHTML = html;

        return;
    }

    function createHtmlRow(i) 
    {

        const task = tasks[i];
        const checkedHtml = task.isDone ? 'checked="checked"' : '';

        if (!task.editMode)
            return /*HTML*/`<tr>
                            <td>${task.description}</td>
                            <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                            <td>
                                <button onclick="deleteTask(${i})">Slett</button>
                                <button onclick="editTask(${i})">Rediger</button>
                            </td>
                            <td>${task.assigned}</td>
                            <td>${task.deadline}</td>
                            <td>${task.timestamp}</td>
                        </tr>`;
        return `<tr>
                            <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                            <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                            <td>
                                <button onclick="updateTask(${i})">Lagre</button>
                            </td>
                        </tr>
                        `;
    }

    function changeIsDone(checkbox, index) {
        tasks[index].isDone = checkbox.checked;
        tasks[index].timestamp = new Date();
        show();
    }

    function updateTask(index) {
        const id = `editDescription${index}`;
        const inputTag = document.getElementById(id);
        const task = tasks[index];


        task.description = inputTag.value;
        task.editMode = false;
        show();
    }

//  @krigjo25 
function assignedto()
{
    //  Assign name to list
}

function deadline()
{
    //  Fetch selected date

    // ADD dd.month-yy
}

function timestamp()
{
    //  Fetch current date

    //  Ensure that checked is true

        //  Add timestamp
}

// Terje
    function deleteTask(index) {
        tasks.splice(index, 1);
        show();
    }

    function editTask(index) {
        tasks[index].editMode = true;
        show();
    }
