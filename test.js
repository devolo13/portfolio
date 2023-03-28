function themeSelect(element) {
  var chosenTheme = 'resources/';
  chosenTheme += element.value;
  chosenTheme += '.bootstrap.min.css';
  var theBootstrapStylesheet = document.getElementById('bootstrapStylesheet');
  theBootstrapStylesheet.setAttribute('href', chosenTheme);
}
