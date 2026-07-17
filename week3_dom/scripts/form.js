const form  = document.getElementById('login_form');

form.addEventListener('submit', (event)=> {
  event.preventDefault();
  // Handle form submission logic here
  // console.log('working, ')

  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  const payload = {
    username, 
    password
  }

  console.log(payload);
})
