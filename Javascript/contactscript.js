document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const topic = document.getElementById('topic').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Send data to the server
    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            message,
            topic
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('form-feedback').style.display = 'block';
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    });
});