 is:inline
 document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('overlay');
        
        if (hamburger && mobileMenu && overlay) {
          hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
          });
          
          overlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
          });
          
          const menuLinks = mobileMenu.querySelectorAll('a');
          menuLinks.forEach(link => {
            link.addEventListener('click', function() {
              hamburger.classList.remove('active');
              mobileMenu.classList.remove('active');
              overlay.classList.remove('active');
            });
          });
        }
      });