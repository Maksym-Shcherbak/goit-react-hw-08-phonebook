const show = () => {
  const p = document.getElementById('pwd');
  p.setAttribute('type', 'text');
};

const hide = () => {
  const p = document.getElementById('pwd');
  p.setAttribute('type', 'password');
};

let pwShown = false;
export const togglePasswordVisible = () => {
  if (!pwShown) {
    show();
    pwShown = true;
  } else {
    pwShown = false;
    hide();
  }
};
