import { getFormInputValues } from './utils.js';
import { postRequest } from './api.js';
import {
  API_ENDPOINTS,
  LOGIN_FORM_IDS,
  LOGIN_ERROR_MESSAGE,
  LOGIN_REDIRECT_URL
} from './config.js';

const handleResponse = (responseData) => {
  if (responseData && responseData.message === 'Login successful') {
    alert('Login successful');
    window.location.replace(LOGIN_REDIRECT_URL);
  } else {
    alert(LOGIN_ERROR_MESSAGE);
  }
};

const loginUser = async (event) => {
  event.preventDefault();

  const formValues = getFormInputValues(LOGIN_FORM_IDS);

  const requestBody = JSON.stringify({
    identifier: formValues.identifier,
    password: formValues.password
  });

  try {
    const responseData = await postRequest(API_ENDPOINTS.login, requestBody);
    handleResponse(responseData);
  } catch (error) {
    console.error('Error:', error);
    alert(LOGIN_ERROR_MESSAGE);
  }
};

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', loginUser);
