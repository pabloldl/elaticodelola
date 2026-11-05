(() => {
  'use strict';
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const narrow = window.matchMedia('(max-width: 760px)');
  const setMenu = (open) => {
    button.setAttribute('aria-expanded', String(open));
    navigation.hidden = narrow.matches && !open;
  };
  button.hidden = false;
  setMenu(false);
  button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && narrow.matches) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && narrow.matches && button.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      button.focus();
    }
  });
  narrow.addEventListener('change', () => setMenu(false));
  const dialog = document.querySelector('.photo-dialog');
  const photos = [...document.querySelectorAll('.photo-open')];
  let photoIndex = 0;
  const showPhoto = (index) => {
    photoIndex = (index + photos.length) % photos.length;
    const source = photos[photoIndex].querySelector('img');
    const image = dialog.querySelector('.photo-dialog-stage img');
    image.src = source.src;
    image.alt = source.alt;
    dialog.querySelector('.photo-counter').textContent = `${String(photoIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
    dialog.querySelector('.photo-caption').textContent = photos[photoIndex].closest('figure').querySelector('figcaption').textContent.slice(2);
  };
  photos.forEach((photo, index) => photo.addEventListener('click', () => {
    showPhoto(index);
    dialog.showModal();
    document.body.classList.add('photo-is-open');
  }));
  dialog.querySelector('.photo-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.photo-prev').addEventListener('click', () => showPhoto(photoIndex - 1));
  dialog.querySelector('.photo-next').addEventListener('click', () => showPhoto(photoIndex + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(photoIndex - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(photoIndex + 1); }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('photo-is-open');
    photos[photoIndex].focus({ preventScroll: true });
  });
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reduced.matches) {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach((item) => { item.classList.add('pending'); observer.observe(item); });
    const showAll = () => {
      if (reduced.matches) { items.forEach((item) => item.classList.remove('pending')); observer.disconnect(); }
    };
    reduced.addEventListener('change', showAll);
  }
})();
