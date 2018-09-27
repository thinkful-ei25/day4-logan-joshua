'use strict';
//whichever picture user selects out of the images should be displayed at the top
//mouse or keyboard


function imageSelection() {
  $('.thumbnail').on('click', event => {
    const targetImage = $(event.currentTarget);
    const otherImages = $('.thumbnail').not(targetImage);
    const clickedImage = $(targetImage).attr('aria-pressed') === 'true';

    $('.hero img').attr('src',targetImage);

  });
}

$(imageSelection);