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

  // TODO: Send a request to the server to authenticate the user
    // If the user is authenticated, redirect them to the dashboard page
    // Otherwise, display an error message on the page

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

  // TODO: Send a request to the server to create a new user account
    // If the account is created successfully, redirect them to the dashboard page
    // Otherwise, display an error message on the page

});

function isValidEmail(email) {
  // A regular expression to validate email addresses
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}