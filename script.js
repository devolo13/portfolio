function themeToggle(element) {
  if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    element.innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    element.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  }
}
