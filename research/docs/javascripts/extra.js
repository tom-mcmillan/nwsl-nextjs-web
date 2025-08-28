// Add custom navigation and make logo link to homepage
document.addEventListener('DOMContentLoaded', function() {
  // Make logo link to homepage
  const logo = document.querySelector('.md-header__button.md-logo');
  if (logo) {
    logo.href = 'https://nwsldata.com';
    logo.setAttribute('title', 'NWSL Data - Home');
  }
  
  // Also update mobile/sidebar logo
  const sidebarLogo = document.querySelector('.md-nav__button.md-logo');
  if (sidebarLogo) {
    sidebarLogo.href = 'https://nwsldata.com';
  }
  
  // Navigation removed - users come through homepage
});