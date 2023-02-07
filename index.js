const params = new URLSearchParams(window.location.search);

const position = params.get('pos')
const time = parseInt(params.get('time'))

const body = document.getElementById('body')

switch (position) {
    case 'first':
        firstCase()
        break;

    case 'second':
        if(time < 10 ){
          defaulCase(time)
        }else {
          secondeCase()
        }
        
        break;
        case 'last':
            lastCase();
            break;
    default:
        defaulCase()
        break;
}

function firstCase() {
    const timeClick = time ? time+1 : 1;
    const timeClass = time < 9 || !time ? 'red' : 'green'
    body.innerHTML=`
    <h1>Viens-je</h1>
    <a href="index.html?pos=first&time=${timeClick}">Clic ici</a>
    <a title="au moins 10 ?" href="index.html?pos=second&time=${timeClick}">Mais pas là</a>
    <p class=${timeClass}>Nombre de fois que tu as cliqué : ${timeClick} </p>
 
    `;
}

function secondeCase() {
    let text = '';
    for (let index = 0; index < 500; index++) {
        if(index !== 255) {
            text+= `<a class="button" href="index.html">ici ?</a>`
        }else {
            text+= `<a class="button white" href="index.html?pos=last&time=${time}">là ?</a>`
        }
    }
    body.innerHTML = text;
}

function lastCase() {
    body.innerHTML = ` 
    <h1>Bonjour,
    je serais présent à pâques. Bisous</h1>
    `;
}

function defaulCase(time) {
    if(time){
        body.innerHTML = ` 
    <h1>Vous n'avez cliqué que ${time} fois</h1>
    <a href="index.html?pos=first&time=${time}">Clic ici</a>
    `;     
    }else {
    body.innerHTML = ` 
    <h1>Bienvenue, vous êtes les bienvenue</h1>
    <a href="index.html?pos=first">Clic ici</a>
    `;
    }
    
}