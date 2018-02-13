var signal = 'yellow';
switch (signal){
    case 'blue' :
        document.querySelector('.result').appendChild(document.createTextNode('GOGO!'));
        break;

    case 'yellow' :
        document.querySelector('.result').appendChild(document.createTextNode('take     care!'));
        break;

    case 'red' :
        document.querySelector('.result').appendChild(document.createTextNode('stop!!!'));
        break;
}
