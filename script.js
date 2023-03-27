// Use sessionStorage for theme cookie
var userTheme = '';
initializeTheme();

function retrieveSessionStorage() {
  userTheme = sessionStorage.getItem('theme');
  return userTheme;
}

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
    userTheme = 'dark';
    setSessionStorage('theme', userTheme);
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('themeButton').innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  }
}

function themeToggle(element) {
  retrieveSessionStorage();
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
