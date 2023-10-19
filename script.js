// Get the form element
const form = document.getElementById('survey-form');

// Get the reset button
const resetButton = document.querySelector('[type="reset"]');

// Add an event listener to the form for submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Check if all fields are filled
    const isFormValid = form.checkValidity();

    if (isFormValid) {
        // Create a popup with selected values
        const popupContent = document.createElement('div');
        popupContent.innerHTML = '<h2>Selected Values</h2>';
        const ul = document.createElement('ul');

        // Iterate through form elements
        for (const element of form.elements) {
            if (element.type !== 'submit' && element.type !== 'reset') {
                if (element.type === 'radio' || element.type === 'checkbox') {
                    if (element.checked) {
                        const li = document.createElement('li');
                        li.innerHTML = `<strong>${element.labels[0].textContent}:</strong> ${element.value}`;
                        ul.appendChild(li);
                    }
                } else {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${element.labels[0].textContent}:</strong> ${element.value}`;
                    ul.appendChild(li);
                }
            }
        }

        popupContent.appendChild(ul);

        // Create the popup
        const popup = document.createElement('div');
        popup.id = 'result-popup';
        popup.appendChild(popupContent);

        // Add the popup to the body
        document.body.appendChild(popup);

        // Reset the form
        form.reset();
    }
});

// Add an event listener to the reset button to hide the popup if it's open
resetButton.addEventListener('click', function() {
    const popup = document.getElementById('result-popup');
    if (popup) {
        popup.remove();
    }
});
