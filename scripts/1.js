'use strict';
const btn = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');
const resultElement = document.querySelector('.js-result');
const formElement = document.querySelector('.js-form');
// const nextPage = document.querySelector('.js-next');
// const previousPage = document.querySelector('.js-previous');

let characterName = '';
let characterGender = '';

function handlerSearch() {
  let search = inputElement.value;
  fetch(`//swapi.dev/api/people/?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      let htmlCode = '';
      for (let i = 0; i < data.results.length; i++) {
        characterName = data.results[i].name;
        htmlCode += '<ul class="list">';
        htmlCode += '<li class="list-element">';
        htmlCode += `${characterName}.`;
        htmlCode += '</li></ul>';
        // nextPage.href = data.next;
        // previousPage.href = data.previous;
      }
      resultElement.innerHTML = htmlCode;
    });
}

function handleForm(ev) {
  ev.preventDefault();
}
formElement.addEventListener('submit', handleForm);
btn.addEventListener('click', handlerSearch);
