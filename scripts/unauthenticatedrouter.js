import { isLoggedIn } from './cookie.js';

function redirectToIndex() {
  window.location.href = 'index.html';
}

function authRouter() {
  if (!isLoggedIn()) {
    redirectToIndex();
  }
}

authRouter();
