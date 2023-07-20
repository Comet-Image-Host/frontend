import { isLoggedIn as checkUserLoggedIn } from '../scripts/cookie.js';

const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const dashboardLink = document.getElementById('dashboardLink');
const logoutButton = document.getElementById('logoutButton');

function toggleDisplayElement(element, displayValue) {
  if (element) { 
    element.style.display = displayValue;
  } else {
    console.warn("Element is not found in the DOM.")
  }
}

function toggleDisplayElements(isLoggedIn) {
  const loginElements = [loginLink, registerLink];
  const userElements = [dashboardLink, logoutButton];
  
  const displayValue = isLoggedIn ? 'none' : 'block';
  loginElements.forEach(element => toggleDisplayElement(element, displayValue));
  
  const userDisplayValue = isLoggedIn ? 'block' : 'none';
  userElements.forEach(element => toggleDisplayElement(element, userDisplayValue));
}

toggleDisplayElements(checkUserLoggedIn());
