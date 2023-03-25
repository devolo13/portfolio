// Use sessionStorage for theme cookie
// current code wouldn't work. need to parse info returned from .getItem

if (window.sessionStorage.getItem(theme) == undefined) {
  window.sessionStorage.setItem('theme', 'dark');
}

if (window.sessionStorage.getItem(theme) === 'dark') {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
  element.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
} else {
  document.documentElement.setAttribute('data-bs-theme', 'light');
  element.innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
}

function themeToggle(element) {
  if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    element.innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
    window.sessionStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    element.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    window.sessionStorage.setItem('theme', 'dark');
  }
}
