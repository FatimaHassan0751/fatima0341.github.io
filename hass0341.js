/* Manupulating The title */
const name = document.getElementById('name')
name.textContent = 'Fatima'

const subtitle = document.getElementById('subtitle')
subtitle.textContent = 'My Web Portfolio'

/* navigation bar */

function myNavbar() {
    var y = document.getElementById('navbarMain');
    if (y.className === "nav-main") {
      y.className += " responsive";
    } else {
      y.className = "nav-main";
    }
  }
