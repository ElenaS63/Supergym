const link = document.querySelector('[data-video-link]');
const button = document.querySelector('[data-video-button]');
const iframe = document.getElementById('iframe');
link.removeAttribute('href');

button.addEventListener('click', () => {
  button.remove();
  link.remove();
  iframe.classList.remove('visually-hidden');
});
