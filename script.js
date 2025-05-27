document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMessage = document.getElementById('formMessage');

  // Basic validation
  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  // Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email address!";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";

  // Optionally reset form
  document.getElementById('contactForm').reset();
});
