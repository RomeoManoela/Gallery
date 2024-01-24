'use strict';
const imgSelected = document.querySelector('.imgSelected');
const modal = document.querySelector('.modal');
const sect = document.querySelectorAll('section');
const btn = document.querySelectorAll('button');
const activeImg = document.querySelector('.active');
const imgRestContainer = document.querySelector('.imgRestContainer');
const sectConatainer = document.querySelector('.sectionContainer');
const figCaps = document.querySelector('p');
let imgclicked;
let i;

const initializingImgRest = function (target) {
  imgRestContainer.innerHTML = '';
  figCaps.innerText = imgclicked.parentNode.classList.contains('nature')
    ? `Nature-${i} `
    : `City-${i} `;
  [...target.parentNode.children].forEach((img) => {
    const imageRest =
      img.getAttribute('src') == activeImg.getAttribute('src')
        ? `<img src="${img.getAttribute(
            'src'
          )}" alt="" class="imgRest imgSelected" />`
        : `<img src="${img.getAttribute('src')}" alt="" class="imgRest" />`;
    imgRestContainer.insertAdjacentHTML('beforeend', imageRest);
  });
  console.log(imgRestContainer.childNodes);
};
sectConatainer.addEventListener('click', function (e) {
  if (e.target.parentNode.classList.contains('sect')) {
    //initialization of imgclicked and i
    imgclicked = e.target;
    i = +imgclicked.getAttribute('id');
    activeImg.src = e.target.getAttribute('src');
    modal.classList.remove('hidden');
    document.querySelector('body').classList.add('modalBG');
    sect.forEach((sec) => sec.classList.add('hidden'));
    initializingImgRest(imgclicked);
  }
});

btn.forEach((but) => {
  but.addEventListener('click', function () {
    if (this.classList.contains('exit')) {
      modal.classList.add('hidden');
      sect.forEach((sec) => sec.classList.remove('hidden'));
      document.documentElement.style.backgroundColor = '#fff';
      document.querySelector('body').classList.remove('modalBG');
    }
    if (this.classList.contains('left')) {
      console.log(i);
      i--;
      console.log(i, 0 > i);
      console.log([...imgclicked.parentNode.children].length);
      if (imgclicked.parentNode.classList.contains('nature') && 1 > i)
        i = [...imgclicked.parentNode.children].length;
      console.log(i);
      if (imgclicked.parentNode.classList.contains('city') && 1 > i)
        i = [...imgclicked.parentNode.children].length;

      console.log(i);
      imgSelected.src = activeImg.src =
        imgclicked.parentNode.classList.contains('nature')
          ? `images/nature-${i}.jpg`
          : `images/city-${i}.jpg`;

      initializingImgRest(imgclicked);
      console.log(activeImg.src, imgSelected.src);
    }

    if (this.classList.contains('right')) {
      i++;
      console.log(i, 0 > i);
      console.log([...imgclicked.parentNode.children].length);
      if (
        imgclicked.parentNode.classList.contains('nature') &&
        i > [...imgclicked.parentNode.children].length
      )
        i = 1;
      console.log(i);
      if (
        imgclicked.parentNode.classList.contains('city') &&
        i > [...imgclicked.parentNode.children].length
      )
        i = 1;

      console.log(i);
      imgSelected.src = activeImg.src =
        imgclicked.parentNode.classList.contains('nature')
          ? `images/nature-${i}.jpg`
          : `images/city-${i}.jpg`;

      initializingImgRest(imgclicked);
    }
  });
});
