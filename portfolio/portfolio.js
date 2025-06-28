

// Keyboard focus styling for accessibility on sidebar links
const links = document.querySelectorAll('.sidebar nav a');
links.forEach(link => {
  link.addEventListener('focus', () => {
    link.style.outline = '2px solid #ff6f61';
    link.style.outlineOffset = '2px';
  });
  link.addEventListener('blur', () => {
    link.style.outline = 'none';
  });
});

// Sidebar toggle functionality
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');

  // Update aria-expanded for accessibility
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!expanded));
});



