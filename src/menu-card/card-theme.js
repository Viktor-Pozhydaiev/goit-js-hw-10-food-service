const body = document.querySelector('body');
const checkBox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkBox.addEventListener('change', onThemeCheckbox);

getCurrentTheme();

function onThemeCheckbox(e) {
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  localStorage.setItem('theme', body.classList);
}

function getCurrentTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.add(currentTheme);
    checkBox.checked = currentTheme === Theme.LIGHT ? false : true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}