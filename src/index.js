import _ from 'lodash';
import './style.css'
import printMe from './print';
import Icon from './image.png'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'chems'], ' ');
    element.classList.add('hello');
    const btn = document.createElement('button');
    

    btn.innerHTML = "Click me and check the console!";

    btn.addEventListener("click", printMe);

    const myImage = new Image();
    myImage.src = Icon;
    element.appendChild(myImage);
    element.appendChild(btn);
  
    return element;
  }

  document.body.appendChild(component());
  