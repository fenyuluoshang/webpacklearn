import './css/index.scss'

function component() {
    var element = document.createElement('div');
    element.id = 'app';
    element.innerText = "hello word";

    return element;
}

document.body.appendChild(component());