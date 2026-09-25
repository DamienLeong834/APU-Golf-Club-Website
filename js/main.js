/* APU Golf Club - main javascript */

// mobile nav toggle (hamburger menu)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  function isOpen() {
    return links.classList.contains('open');
  }

  function setOpen(open) {
    links.classList.toggle('open', open);
    // keeps the CSS X-morph and screen readers in sync with the real state
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // tapping a link should close the menu, not leave it hanging open
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Escape closes and returns focus to the button
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // clicking anywhere outside the header closes it
  document.addEventListener('click', function (e) {
    if (!isOpen()) return;
    if (e.target.closest && e.target.closest('.navbar')) return;
    setOpen(false);
  });

  // going back up to desktop width should not leave the menu stuck open
  window.addEventListener('resize', function () {
    if (window.innerWidth > 640 && isOpen()) setOpen(false);
  });
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
      overlay.classList.add('open');
    });
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target.classList.contains('lb-close')) {
      overlay.classList.remove('open');
    }
  });
}
document.addEventListener('DOMContentLoaded', initGallery);
