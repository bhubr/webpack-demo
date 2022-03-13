function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'react'], ' ');

  return element;
}

document.getElementById('root').appendChild(component());