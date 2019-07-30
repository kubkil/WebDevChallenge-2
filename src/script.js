// toggle gallery
var btnGallery = document.querySelector('.gallery__button');
var galleryHidden = document.querySelector('.gallery__hidden');

$(btnGallery).click(() => {
  $(galleryHidden).addClass('gallery__shown');
});
});
