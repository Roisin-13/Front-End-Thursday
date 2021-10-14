let colours = ['red', 'green', 'blue', 'orange', 'lime', 'olive', 'black', 'yellow'];

//let i = 0; i > colours.length; i++;



function buildP(placeholder, num) {
    let i = 0;
    do {
        placeholder = document.querySelector('#placeholder');
        let p = document.createElement('p');
        p.style.color = colours[parseInt(Math.random() * colours.length)];
        let text = document.createTextNode(`Have you tried turning it off and back on again?`);
        p.appendChild(text);
        placeholder.appendChild(p);
        i++

    } while (i < colours.length);

}
buildP(document.querySelector('#placeholder'), colours.length);