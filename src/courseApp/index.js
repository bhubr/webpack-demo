import { Converter } from 'showdown';

const converter = new Converter();

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = converter.makeHtml(`
# Hello Markdown

This is some text. This is [a link to React docs](https://reactjs.org).
  `)

  return element;
}

document.getElementById('markdown').appendChild(component());