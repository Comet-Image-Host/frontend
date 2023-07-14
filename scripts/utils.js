// utils.js
function getFormInputValues(formIds) {
    return formIds.reduce((values, id) => {
        values[id] = document.getElementById(id).value;
        return values;
    }, {});
}

function validatePasswordsMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
        alert("Password and confirm password do not match");
        return false;
    }
    return true;
}

export { getFormInputValues, validatePasswordsMatch };
