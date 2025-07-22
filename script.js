function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create a mailto link
  const mailtoLink = `mailto:rpriatharsini3012@gmail.com?subject=Message from ${encodeURIComponent(firstName + ' ' + lastName)}&body=Name: ${encodeURIComponent(firstName + ' ' + lastName)}%0AEmail: ${encodeURIComponent(email)}%0ANumber: ${encodeURIComponent(number)}%0AMessage: ${encodeURIComponent(message)}`;

  // Open the user's email client
  window.location.href = mailtoLink;

  // Optionally, reset the form after sending
  document.querySelector('.contact-form').reset();
}
