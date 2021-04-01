'use strict';

const buttonElement = document.querySelector('.js-btn');
const resetElement = document.querySelector('.js-reset');
const inputElement = document.querySelector('.js-input');
const characterElement = document.querySelector('.js-result');
const formElement = document.querySelector('.js-form');
// const nextPage = document.querySelector('.js-next');
// const previousPage = document.querySelector('.js-previous');

let characterName = '';
let characterGender = '';

let characterHair = '';
let characterSkin = '';
let characterEyes = '';
let characterBirth = '';

function handleButton() {
  let search = inputElement.value;
  fetch(`//swapi.dev/api/people/?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      let characterDetails = '';
      if (data.results.length === 0) {
        characterDetails += '<ul class="list">';
        characterDetails += `<li class="list-element">No results.</li>`;
        characterDetails += '</ul>';
      } else {
        for (let i = 0; i < data.results.length; i++) {
          characterName = data.results[i].name;
          characterGender = data.results[i].gender;
          characterHair = data.results[i].hair_color;
          characterSkin = data.results[i].skin_color;
          characterEyes = data.results[i].eye_color;
          characterBirth = data.results[i].birth_year;

          characterDetails += '<ul class="list">';
          characterDetails += `<li class="list-element">#${[i + 1]}: ${characterName}.</li>`;
          characterDetails += `<li class="list-element">${characterGender}</li>`;
          characterDetails += `<li class="list-element">Hair: ${characterHair}</li>`;
          characterDetails += `<li class="list-element">Skin: ${characterSkin}</li>`;
          characterDetails += `<li class="list-element">Eyes: ${characterEyes}</li>`;
          characterDetails += `<li class="list-element">Birth: ${characterBirth}</li>`;
          characterDetails += '</ul>';
        }
      }
      characterElement.innerHTML = `${characterDetails}`;
    });
}

function handleForm(ev) {
  ev.preventDefault();
}

function handleReset() {
  characterElement.innerHTML = '';
}

formElement.addEventListener('submit', handleForm);
buttonElement.addEventListener('click', handleButton);
resetElement.addEventListener('click', handleReset);
