import { isLoggedIn } from './cookie.js';

function redirectToDashboard() {
  window.location.href = 'dashboard.html';
}

function authenticatedRouter() {
  if (isLoggedIn()) {
    redirectToDashboard();
  }
}

authenticatedRouter();
