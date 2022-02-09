const wrps = document.querySelectorAll('[data-preview]');
const MAX_ANGLE = 50;

const init = (wrp) => {
  wrp.addEventListener('mousemove', (e) => {
    const params = wrp.getBoundingClientRect();
    const wrpWidthHalf = wrp.offsetWidth / 2;
    const angle = (wrpWidthHalf - (e.clientX - params.left)) * -MAX_ANGLE / wrpWidthHalf;
    const el = wrp.querySelector('.preview');
    el.style.top = e.clientY - params.top + 'px';
    el.style.left = e.clientX - params.left + 'px';
    el.firstElementChild.style.transform = `rotate(${angle}deg)`;
  });
}

const initPreviews = () => wrps.forEach(init);

initPreviews()  
