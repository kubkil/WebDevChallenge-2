// toggle gallery
var btnGallery = document.querySelector('.gallery__button');
var galleryHidden = document.querySelector('.gallery__row--hidden');

$(btnGallery).click(() => {
  $(galleryHidden).addClass('gallery__row--shown');
});
