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
  
  // Add custom navigation links
  const header = document.querySelector('.md-header__inner');
  if (header) {
    const nav = document.createElement('div');
    nav.className = 'custom-nav';
    nav.innerHTML = `
      <a href="/research" class="active">Research</a>
      <a href="https://platform.nwsldata.com">Chat</a>
    `;
    
    // Append navigation to the end (it will be positioned with CSS)
    header.appendChild(nav);
  }
});