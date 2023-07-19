import { isLoggedIn as checkUserLoggedIn } from '../scripts/cookie.js';

function renderNavbar() {
  var navbar = document.createElement('nav');
  navbar.className = 'navbar navbar-expand-lg navbar-dark bg-dark';

  var container = document.createElement('div');
  container.className = 'container';

  var brandLink = document.createElement('a');
  brandLink.className = 'navbar-brand';
  brandLink.href = 'index.html';
  brandLink.textContent = 'Upload.cometbot.info';

  var togglerButton = document.createElement('button');
  togglerButton.className = 'navbar-toggler';
  togglerButton.type = 'button';
  togglerButton.setAttribute('data-bs-toggle', 'collapse');
  togglerButton.setAttribute('data-bs-target', '#navbarNav');
  togglerButton.setAttribute('aria-controls', 'navbarNav');
  togglerButton.setAttribute('aria-expanded', 'false');
  togglerButton.setAttribute('aria-label', 'Toggle navigation');

  togglerButton.innerHTML = '<span class="navbar-toggler-icon"></span>';

  var collapseDiv = document.createElement('div');
  collapseDiv.className = 'collapse navbar-collapse';
  collapseDiv.id = 'navbarNav';

  var navList = document.createElement('ul');
  navList.className = 'navbar-nav ml-auto';

  var navItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Login', href: 'login.html' },
    { text: 'Register', href: 'register.html' },
    { text: 'About', href: 'about.html' },
    { text: 'Dashboard', href: 'dashboard.html' },
  ];

  var userLoggedIn = checkUserLoggedIn();

  navItems
    .filter(function (item) {
      return !(
        (item.text === 'Login' || item.text === 'Register') && userLoggedIn
      ) && !(item.text === 'Dashboard' && !userLoggedIn);
    })
    .forEach(function (item) {
      var listItem = document.createElement('li');
      listItem.className = 'nav-item';

      var link = document.createElement('a');
      link.className = 'nav-link';
      link.href = item.href;
      link.textContent = item.text;

      listItem.appendChild(link);
      navList.appendChild(listItem);
    });

  // Add logout button
  if (userLoggedIn) {
    var logoutButton = document.createElement('button');
    logoutButton.className = 'nav-link btn btn-link';
    logoutButton.textContent = 'Logout';
    navList.appendChild(logoutButton);
  }

  collapseDiv.appendChild(navList);
  container.appendChild(brandLink);
  container.appendChild(togglerButton);
  container.appendChild(collapseDiv);
  navbar.appendChild(container);

  document.body.insertBefore(navbar, document.body.firstChild);
}

renderNavbar();
