const loginForm = document.querySelector('#logIn form');
const signUpForm = document.querySelector('#signUp form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (!email || !password) {
    alert('Please enter your email and password.');
    return;
  }

  fetch('/api/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'example',
      password: 'password'
    })
  })
  .then(response => {
    if (response.ok) {
      // If the response is OK, redirect the user to the display page
      window.location.href = '/display';
    } else {
      // If the response is not OK, display an error message on the page
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  })
  .catch(error => {
    console.error(error);
    // Display an error message on the page
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred while authenticating. Please try again later.';
    document.body.appendChild(errorMessage);
  });

});

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  const email = signUpForm.signupEmail.value;
  const password = signUpForm.signupPassword.value;
  const confirmPassword = signUpForm.confirmPassword.value;

  if (!email || !password || !confirmPassword) {
    alert('Please enter your email and password.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'example',
      password: 'password'
    })
  })
  .then(response => {
    if (response.ok) {
      // If the response is OK, redirect the user to the dashboard page
      window.location.href = '/display';
    } else {
      // If the response is not OK, display an error message on the page
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  })
  .catch(error => {
    console.error(error);
    // Display an error message on the page
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred while creating your account. Please try again later.';
    document.body.appendChild(errorMessage);
  });

});

function isValidEmail(email) {
  // A regular expression to validate email addresses
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}