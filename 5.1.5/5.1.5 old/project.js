function isMobile() {
  return window.innerWidth <= 767; // Adjust the value as needed for your definition of 'mobile'
}

// Initialize Swiper only if on a mobile device
if (isMobile()) {
  const swiper = new Swiper('.swiper', {
 // Adjust the space between slides
    slidesPerView: 1.2,  // Show one full slide and part of the next
    pagination: {
      el: '.swiper-pagination',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
