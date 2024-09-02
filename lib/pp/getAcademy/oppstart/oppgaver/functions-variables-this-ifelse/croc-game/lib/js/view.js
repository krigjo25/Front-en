// Views -> Represents the modal
main();
function main()
{
    //  Initializing randomized integers
    let r1 = random(10);
    let r2 = random(10);

    //  Print it on screen
    app.innerHTML=/*HTML*/`
    <p><b>${r1}</b> <input type="text" onchange="submit('${r1}', this.value, '${r2}')"> <b>${r2}</b></p>
    <button onclick="main()">Continue</button>`;

    //  return the result to the user and give the user a point
    return
}