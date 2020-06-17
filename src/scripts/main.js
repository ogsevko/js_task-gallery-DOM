'use strict';

function gallery(element) {
  const imageList = element.querySelector('#thumbs');

  imageList.addEventListener('click', (clickEvent) => {
    const selected = clickEvent.target.closest('.gallery__img');
    const largeImage = element.querySelector('#largeImg');

    if (selected || imageList.contains(selected)) {
      clickEvent.preventDefault();

      const imageSrc = selected
        .getAttribute('src')
        .replace('-thumb.jpeg', '.png');

      largeImage.setAttribute('src', imageSrc);
    }
  });
}

gallery(document.querySelector('.gallery'));
