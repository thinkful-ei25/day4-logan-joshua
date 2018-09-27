'use strict';
//whichever picture user selects out of the images should be displayed at the top
//mouse or keyboard
function imageSelection() {
  $('.thumbnail').on('click', function(event) {
    const targetImage = $(event.currentTarget).find('img');

    $('.hero img').attr('src',targetImage.attr('src')).attr('alt',targetImage.attr('alt'));

  });
}

$(imageSelection);