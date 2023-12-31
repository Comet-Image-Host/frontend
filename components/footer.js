// Create the footer element
var footer = document.createElement('footer');
footer.classList.add('footer', 'bg-dark', 'text-white', 'py-3');

// Create the container element
var container = document.createElement('div');
container.classList.add('container', 'text-center');

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Create the paragraph element with the dynamic year
var paragraph = document.createElement('p');
paragraph.classList.add('footer-text');
paragraph.textContent = '\u00A9 ' + getCurrentYear() + ' Upload.cometbot.info. All rights reserved.';

// Append the paragraph element to the container element
container.appendChild(paragraph);

// Append the container element to the footer element
footer.appendChild(container);

// Append the footer element directly to the document body instead of using document.body
document.body.appendChild(footer);
