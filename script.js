// Use sessionStorage for theme cookie
// current code wouldn't work. need to parse info returned from .getItem
var userTheme = '';
retrieveSessionStorage();
initializeTheme();

function retrieveSessionStorage() {
  // retrieve and parse sessionStorage. then set userTheme and return currentTheme
  userTheme = '';
  return currentTheme;
}

function setSessionStorage(currentTheme) {
  // push currentTheme to sessionStorage
  userTheme = currentTheme;
}

function initializeTheme() {
  // element will not work here because it's not being called from HTML
  if (userTheme === 'light') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    element.innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
  } else {
    userTheme = 'dark';
    setSessionStorage(userTheme);
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    element.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  }
}

function themeToggle(element) {
  var theme = retrieveSessionStorage();
  if (theme == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    element.innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
    setSessionStorage('dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    element.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    setSessionStorage('light');
  }
}
