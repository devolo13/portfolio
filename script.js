var userTheme = '';
initializeTheme();

function setThemeCookie(theme){
  userTheme = theme;
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = "theme=" + theme + ";" + expires + ";path=/";
}

function retrieveThemeCookie(){
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++){
    let c = ca[i];
    while (c.charAt(0) == ' '){
      c = c.substring(1);
    }
    if (c.indexOf('theme=')==0){
      userTheme = c.substring(6, c.length);
      return userTheme;
    }
  }
  return "";
}

function initializeTheme() {
  retrieveThemeCookie();
  if (userTheme === 'light') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.getElementById('themeButton').innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
  } else {
    setThemeCookie('dark');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('themeButton').innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  }
}

function themeToggle(element) {
  retrieveThemeCookie;
  if (userTheme == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    element.innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i>';
    setThemeCookie('light');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    element.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    setThemeCookie('dark');
  }
}
