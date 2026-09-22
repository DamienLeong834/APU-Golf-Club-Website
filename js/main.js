/* APU Golf Club - main javascript */

// mobile nav toggle (hamburger menu)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
});

// image gallery - click to enlarge, click to close
function initGallery() {
  var imgs = document.querySelectorAll('.gallery img');
  var overlay = document.getElementById('lightbox');
  if (!overlay) return;
  var box = overlay.querySelector('.lb-img');
  imgs.forEach(function (img) {
    img.addEventListener('click', function () {
      box.src = img.src;
      overlay.style.display = 'grid';
    });
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target.classList.contains('lb-close')) {
      overlay.style.display = 'none';
    }
  });
}
document.addEventListener('DOMContentLoaded', initGallery);
