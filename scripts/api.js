import { API_ENDPOINTS } from './config.js';

async function postRequest(url, requestBody) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: requestBody,
    });
    return await response.json();
}

export { postRequest };
