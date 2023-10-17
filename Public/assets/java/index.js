const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.signUp-form');

const loginFormHelper = async (event) => {
  event.preventDefault(); // prevent the form from submitting

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (!email || !password) {
    alert('Please enter your email and password.');
    return;
  }

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      // If the response is not OK, display an error message on the page
      const error = new Error(response.statusText);
      error.response = response;
      console.error(error);
      // Display an error message on the page
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'An error occurred while authenticating. Please try again later.';
      document.body.appendChild(errorMessage);
    } 
  }
};

const signUpFormHelper =  async (event) => {
  event.preventDefault(); // prevent the form from submitting

  const name = document.querySelector('#signupName').value.trim();
  const email = document.querySelector('#signupEmail').value.trim();
  const password = document.querySelector('#signupPassword').value.trim();
  const confirmPassword = document.querySelector('#confirmPassword').value.trim();

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

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('../weeklyWorkout.html');
    } else {
      // If the response is not OK, display an error message on the page
      const error = new Error(response.statusText);
      error.response = response;
      console.error(error);
      // Display an error message on the page
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'An error occurred while creating your account. Please try again later.';
      document.body.appendChild(errorMessage);
    }
  }
};

function isValidEmail(email) {
  // A regular expression to validate email addresses
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

loginForm.addEventListener('submit', loginFormHelper);

signUpForm.addEventListener('submit', signUpFormHelper);