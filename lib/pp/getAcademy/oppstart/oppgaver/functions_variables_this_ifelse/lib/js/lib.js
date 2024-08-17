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

