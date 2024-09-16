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


  /*featureItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
          if (index === featureItems.length - 1) {
              // For the last item, fade out based on its position alone
              const opacity = Math.max(0, 1 - Math.abs(itemRect.top - windowHeight / 2) / (windowHeight / 2));
              item.style.opacity = opacity;
          } else {
              const nextItemRect = featureItems[index + 1].getBoundingClientRect();
  
              if (nextItemRect.top < windowHeight && nextItemRect.bottom > 0) {
                  // Fade out the current item as the next item comes into view
                  const opacity = Math.max(0, (nextItemRect.top - windowHeight / 2) / (windowHeight / 2));
                  item.style.opacity = 1 - opacity;
              } else {
                  // Ensure the item is fully opaque if the next item is not in view
                  item.style.opacity = 1;
              }
          }
      /*});*/