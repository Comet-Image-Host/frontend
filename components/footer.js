// Create the footer element
const footer = document.createElement('footer');
footer.classList.add('footer', 'bg-dark', 'text-white', 'py-3');

// Create the container element
const container = document.createElement('div');
container.classList.add('container', 'text-center');

// Create the paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = '\u00A9 2023 Upload.cometbot.info. All rights reserved.';

// Append the paragraph element to the container element
container.appendChild(paragraph);

// Append the container element to the footer element
footer.appendChild(container);

// Append the footer element directly to the document body instead of using document.body
document.body.append(footer);
