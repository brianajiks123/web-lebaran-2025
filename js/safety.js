// Disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable F12 key
document.onkeydown = function(e) {
  if (e.keyCode == 123) {
    return false;
  }
};
