 const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
      });
      slides[index].classList.add("active");
      dots[index].classList.add("active");
      currentIndex = index;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    