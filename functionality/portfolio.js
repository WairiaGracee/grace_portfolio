
  const wrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.project-slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;

  function showSlide(i) {
    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;
    wrapper.style.transform = `translateX(${-index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index++;
    showSlide(index);
  });

  prevBtn.addEventListener('click', () => {
    index--;
    showSlide(index);
  });

  // Swipe for mobile
  let startX = 0;
  wrapper.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  wrapper.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) { // swipe left
      index++;
      showSlide(index);
    } else if (endX - startX > 50) { // swipe right
      index--;
      showSlide(index);
    }
  });

