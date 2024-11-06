document.addEventListener('DOMContentLoaded', function() {
      const sliderContainer = document.querySelector('.slider-container');
      const slides = document.querySelectorAll('.slide');
      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');
      const dotsContainer = document.querySelector('.slider-dots');
      let currentIndex = 0;
      let intervalId;

      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });

      const dots = document.querySelectorAll('.dot');

      function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }

      function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetInterval();
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
      }

      function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 5000);
      }

      prevButton.addEventListener('click', () => {
        prevSlide();
        resetInterval();
      });
      nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
      });

      updateSlider();
      resetInterval();

      // Pause automatisches Gleiten bei Mauszeiger über dem Slider
      const imageSlider = document.querySelector('.image-slider');
      imageSlider.addEventListener('mouseenter', () => clearInterval(intervalId));
      imageSlider.addEventListener('mouseleave', resetInterval);
    });
	
	   document.addEventListener('DOMContentLoaded', function() {
      const menuIcon = document.querySelector('.menu-icon');
      const navList = document.querySelector('.nav-list');

      menuIcon.addEventListener('click', function() {
        navList.classList.toggle('show');
      });

      // Slider-Funktionalität
      const slider = document.querySelector('.offers-container');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let slideIndex = 0;

      function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
      }

      function nextSlide() {
        slideIndex = (slideIndex + 1) % 3; // Annahme: 3 Slides
        showSlide(slideIndex);
      }

      function prevSlide() {
        slideIndex = (slideIndex - 1 + 3) % 3; // Annahme: 3 Slides
        showSlide(slideIndex);
      }

      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
    });

    /* Über Uns: */

    document.addEventListener('DOMContentLoaded', function() {
      const entries = document.querySelectorAll('.zeitstrahl-eintrag');

      function checkScroll() {
        entries.forEach(entry => {
          const entryTop = entry.getBoundingClientRect().top;
          const entryBottom = entry.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          if (entryTop < windowHeight * 0.75 && entryBottom > 0) {
            entry.classList.add('aktiv');
          } else {
            entry.classList.remove('aktiv');
          }
        });
      }

      window.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check on page load

      entries.forEach(entry => {
        const toggleButton = entry.querySelector('.zusatzinfo-toggle');
        toggleButton.addEventListener('click', function() {
          entry.classList.toggle('expanded');
        });
      });
    });