function htmlManipulation(color, height, width, txt)
{
    //  Task 2 :Functions, variables, this and if/else.

    //  manipulate text
    document.getElementById('fvtie').innerHTML = /* HTML */`
    <div id='fvtie' style="background-color:rgba(${color}); height:${height}vh; inline-size:${width}vh">
        <p>
        ${txt}
        </p>
    </div>`;

    return;
}
