document.addEventListener("DOMContentLoaded", function() {
    const navbarDesktop = document.getElementById("desktop");
    const navbarMobile = document.getElementById("mobile");
    const featureItems = document.querySelectorAll('.feature-item'); 
    const maxOpacity = 0.8;
  
    // Function to update navbar opacity based on scroll position
    function updateNavbarOpacity() {
      const scrollPosition = window.scrollY 
      const opacity = Math.min(maxOpacity, scrollPosition / 300);
      navbarDesktop.style.backgroundColor = `rgba(71, 113, 235, ${opacity})`;
      navbarMobile.style.backgroundColor = `rgba(71, 113, 235, ${opacity})`;
      featureItems.style.opacity = 0;
    }
  
    window.addEventListener("scroll", updateNavbarOpacity);
    updateNavbarOpacity();
  });
  
  document.addEventListener("scroll", function() {
    const featureItems = document.querySelectorAll(".feature-item");
});
// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Initialize Flickity
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    // Options
    cellAlign: 'center',        // Align cells to the center
    contain: true,              // Contain cells within the carousel
    /* resize: true,  */              // Recalculates sizes on window resize
    percentPosition: true,      // Position cells with percentage values
    wrapAround: true,           // Optional: enables looping of slides
    autoPlay: 3000,  
  });
});