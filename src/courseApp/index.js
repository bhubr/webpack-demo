function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'markdown'], ' ');

  return element;
}

document.getElementById('markdown').appendChild(component());