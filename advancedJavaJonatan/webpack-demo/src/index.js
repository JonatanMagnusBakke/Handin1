import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    let element = document.createElement('div');
  
    element.innerHTML = _.join(['Hej', 'webpack'], ' ');
    element.classList.add('hello');

// Add the image to our existing div.
   var myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

   const name = 'Kurt Wonnegut';
   setTimeout(() => alert(`Hello there from ${name}`), 1000);
   

    return element;
  }
  
  document.body.appendChild(component());