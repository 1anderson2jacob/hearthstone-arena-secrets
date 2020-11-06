'use strict'

const secretsObj = {
  //rotation legal secrets
  hunter: ['explosive-trap', 'freezing-trap', 'misdirection', 'snake-trap', 'snipe', 'pressure-plate', 'pack-tactics'],
  mage: ['counterspell', 'ice-barrier', 'mirror-entity', 'spellbender', 'vaporize', 'flame-ward', 'netherwind-portal'],
  paladin: ['eye-for-an-eye', 'noble-sacrifice', 'redemption', 'repentance', 'never-surrender!'],
  rogue: ['ambush', 'bamboozle', 'dirty-tricks'],
}

displayCards();
bindClassList();
bindCards();
bindModal();


function bindModal() {
  const modal = document.getElementById('modal');
  const popup = document.getElementById('popup');
  modal.addEventListener('click', (e) => {
    if (modal.style.display !== 'none') {
      modal.style.display = 'none';
      popup.style.display = 'none';

      document.querySelector("body").style.overflow = 'visible';
    }
  })
}

function bindClassList() {
  const element = document.getElementById('class-list');

  element.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == "IMG") {
      displayCards(e);
    }
  })
}

function bindCards() {
  const element = document.getElementById('card-list');

  element.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == "IMG") {
      displayModal(e);
    }
  })

}

function displayModal(e) {
  const modal = document.getElementById('modal');
  const popup = document.getElementById('popup');
  const cardSrc = e.target.src;

  if (modal.style.display !== 'inline') {
    popup.setAttribute('src', cardSrc);

    modal.style.display = 'inline';
    popup.style.display = 'block';

    document.querySelector("body").style.overflow = 'hidden';
  }
}

function displayCards(e) {
  removeCards();

  let cardClass;
  e ? cardClass = e.target.id : cardClass = 'mage';

  const ul = document.getElementById('card-list');
  const cardsArr = secretsObj[cardClass];

  for (let i = 0; i < cardsArr.length; i++) {
    let li = document.createElement('li')
    li.classList.add('card');
    let img = document.createElement('img');
    img.setAttribute('id', cardsArr[i]);
    img.src = `assets/cards/${cardClass}/${cardsArr[i]}.png`;
    ul.appendChild(li);
    li.appendChild(img);
  }

}

function removeCards() {
  const ul = document.getElementById('card-list');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}


