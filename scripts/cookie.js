export function checkCookie(cookieName) {
    return document.cookie.split(';').some(function (cookie) {
      return cookie.trim().startsWith(cookieName + '=');
    });
  }
  
  export function isLoggedIn() {
    return checkCookie('session_id');
  }
  