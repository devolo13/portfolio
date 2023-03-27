// Use sessionStorage for theme cookie
var userTheme = '';
initializeTheme();

function setSessionStorage(currentTheme) {
  userTheme = currentTheme;
  sessionStorage.setItem('theme', userTheme);
}

function initializeTheme() {
  userTheme = sessionStorage.getItem('theme');
  if (userTheme === 'light') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.getElementById('themeButton').innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
  } else {
    setSessionStorage('dark');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('themeButton').innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  }
}

function themeToggle(element) {
  userTheme = sessionStorage.getItem('theme');
  if (userTheme == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    element.innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
    setSessionStorage('light');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    element.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    setSessionStorage('dark');
  }
}
