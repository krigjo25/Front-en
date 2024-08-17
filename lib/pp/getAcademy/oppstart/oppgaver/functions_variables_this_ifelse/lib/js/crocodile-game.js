let points = 0;

//  Function to generate a random integer
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
    <p><b>${r1}</b> <input id="answer" name="usrinput" type="text"> <b>${r2}</b></p>
    <button onclick="main()">reset</button> <button onclick="submit('${r1}', 'answer', '${r2}')">Submit</button>`;

    //  return the result to the user and give the user a point
    return
}

function submit(arg, arg1, arg2)
{
    let bool = false;
    console.log(document.getElementById(arg1).value);
    //  Ensure its greater than
    if (arg > arg2)
    {
        //  Ensure input is greater than
        if (document.getElementById(arg1).value === ">")
        {
            //  Bool true
            bool = true;

            //  Notify the user guessed correctly
            document.getElementById('game-message').innerHTML =/*HTML*/`
            Congratulation you guessed correctly!`;
        }
    }
    else if (arg < arg2)
        {
            //  Ensure input is greater than
            if (document.getElementById(arg1).value === "<")
            {
                //  Bool true
                bool = true;

                //  Notify the user guessed correctly
                document.getElementById('game-message').innerHTML =/*HTML*/
                `
                    Congratulation you guessed correctly!
                `;
            }
        }
        //  Otherwise its equal
        else
        {
            //  Ensure input is equal
            if (document.getElementById(arg1).value === "=")
                {
                    //  Bool true
                    bool = true;

                //  Notify the user guessed correctly
                document.getElementById('game-message').innerHTML =/*HTML*/
                `
                    Congratulation you guessed correctly!
                `;
                }
        }
    //  Ensure the variable is true
    if(bool)
    {
        //  Update points
        point();
    }
    return /*HTML*/`${arg}, ${arg1},${arg2}`;
}
function point()
{
    points ++;
    return document.getElementById('points').innerHTML=/*HTML*/`Your points : ${points}`;
}