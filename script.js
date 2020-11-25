document.addEventListener('DOMContentLoaded', (_event) => {
  const mynavbar = document.getElementById('navbar');
  const sticky = mynavbar.offsetTop;
  const mynavbar2 = document.getElementById('navbar2');
  function stickNav() {
    if (window.pageYOffset >= sticky) {
      mynavbar.classList.add('sticky');
      mynavbar2.classList.add('sticky2');
    } else {
      mynavbar.classList.remove('sticky');
      mynavbar2.classList.remove('sticky2');
    }
  }
  window.onscroll = function () {
    stickNav();
  };
});