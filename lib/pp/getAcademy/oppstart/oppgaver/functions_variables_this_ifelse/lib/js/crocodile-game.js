function generateRandomIntenger()
{
    //  Return random number
    return Math.floor(Math.random() *10);
}
function main()
{

    // Initialize Two random numbers
    let r1 = generateRandomIntenger();
    let r2 = generateRandomIntenger();

    //  Print it on screen
    document.getElementById('game').innerHTML=/*HTML*/`
    
    <form>
        <label for="usrinput"> Is <b>${r1}</b> less than, greater than or equal to <b>${r2}</b>?</label>
        <input id="usrinput" name="usrinput" type="text">
    </form>`;

    // Check Answer
    let answer = CheckAnswer(arg1,arg2, document.getElementById('usrinput').value);
    
    //  return the result to the user and give the user a point
    return
}
