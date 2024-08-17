function changeBG()
{
    //  Fetch element 
    let r = document.getElementById('r');
    let g = document.getElementById('g');
    let b = document.getElementById('b');

    // Add a class to the id
    r.classList.toggle('r');
    g.classList.toggle('g');
    b.classList.toggle('b');
}

function upperCase(id, txt)
{
    //  Returning text with a uppercase in the begining of the sentence.
    return document.getElementById(id).innerHTML = /*HTML*/`${txt.replace(txt.charAt(0), txt.charAt(0).toUpperCase())}`;
}