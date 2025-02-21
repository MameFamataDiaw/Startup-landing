const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    direction: 'horizontal',
    
    // Navigation
    navigation: {
      nextEl: 'button[aria-label="right-btn"]',
      prevEl: 'button[aria-label="left btn"]',
    },
    
    // Responsive breakpoints
    breakpoints: {
      // Quand la fenêtre fait >= 768px
      768: {
        slidesPerView: 2,
      },
      // Quand la fenêtre fait >= 1200px
      1200: {
        slidesPerView: 3,
      }
    }
  });