// toggle gallery
var btnGallery = document.querySelector('.gallery__button');
var galleryHidden = document.querySelector('.gallery__hidden');

$(btnGallery).click(() => {
  $(galleryHidden).addClass('gallery__shown');
});

// toggle blog posts
var btnBlog = document.querySelector('.blog__button');
var postHidden = document.querySelectorAll('.blog__hidden');

$(btnBlog).click(() => {
  $(postHidden).addClass('blog__shown');
});
