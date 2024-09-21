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