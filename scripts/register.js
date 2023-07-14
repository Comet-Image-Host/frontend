import { getFormInputValues, validatePasswordsMatch } from './utils.js';
import { postRequest } from './api.js';
import { API_ENDPOINTS, FORM_IDS, REDIRECT_URL } from './config.js';

async function handleResponse(responseData) {
    if (responseData && responseData.message === "User registered successfully") {
        alert("Registration successful");
        window.location.replace(REDIRECT_URL);
    } else {
        alert(`Registration failed: ${responseData.detail}`);
    }
}

async function registerUser(event) {
    event.preventDefault();

    const formValues = getFormInputValues(FORM_IDS);

    if (!validatePasswordsMatch(formValues.password, formValues.confirmPassword)) {
        return;
    }

    const requestBody = JSON.stringify({
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
    });

    try {
        const responseData = await postRequest(API_ENDPOINTS.register, requestBody);
        handleResponse(responseData);
    } catch (error) {
        console.error("Error:", error);
        alert("Registration failed");
    }
}

const registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", registerUser);
