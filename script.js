const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

const users = {
  'harshit123': 'harshit123',
  'admin': 'password123'
};

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (users[username] === password) {
    errorMessage.textContent = '';
    showSuccessDialog(username);
    
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  } else {
    errorMessage.textContent = 'Invalid username or password!!!';
  }
});

function showSuccessDialog(username) {
  const dialogBox = document.createElement('div');
  dialogBox.classList.add('success-dialog');
  dialogBox.innerHTML = `
    <p>Password correct. Welcome, ${username}!</p>
    <button onclick="closeDialog()">Close</button>
  `;
  document.body.appendChild(dialogBox);
}

function closeDialog() {
  const dialogBox = document.querySelector('.success-dialog');
  if (dialogBox) {
    dialogBox.remove();
  }
}
