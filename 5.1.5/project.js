function isMobile() {
  return window.innerWidth <= 767;
}

if (isMobile()) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto', 
    spaceBetween: '16px',
    pagination: {
      el: '.swiper-pagination',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  const showAllButton = document.querySelector('.button');
  const buttonText = document.querySelector('.button span');
  let isHidden = true;

  showAllButton.addEventListener('click', () => {
    const hiddenElements = document.querySelectorAll('.is-hidden:not(.is-showing)');

    if (isHidden) {
      hiddenElements.forEach((el) => {
        el.style.display = 'flex';
      });
      document.querySelector('.arrow').style.transform = 'rotate(180deg)';
      buttonText.textContent = "Hide";
      isHidden = false;
    } else {
      hiddenElements.forEach((el) => {
        el.style.display = 'none';
        el.classList.add('is-hidden');
      });
      document.querySelector('.arrow').style.transform = 'rotate(0deg)';
      buttonText.textContent = "Show All";
      isHidden = true;
    }
  });
});