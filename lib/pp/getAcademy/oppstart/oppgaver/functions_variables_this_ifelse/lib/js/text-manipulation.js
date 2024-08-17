function htmlManipulation(color, height, width, txt)
{
    //  Task 2 :Functions, variables, this and if/else.

    //  manipulate text
    document.querySelector('.fvtie').innerHTML = /* HTML */`
    <div class='fvtie' style="background-color:rgba(${color}); height:${height}em; inline-size:${width}em">
        <p>
        ${txt}
        </p>
    </div>`;
}
