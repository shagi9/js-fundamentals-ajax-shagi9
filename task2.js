// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.getElementById('getUserButton').addEventListener('click', async () => {
  const userName = document.getElementById('userNameInput').value;
  const userCityElement = document.getElementById('userCity');

  userCityElement.textContent = '';

  if (!userName) {
      alert('Please enter a user name');
      return;
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  const user = users.find(user => user.name === userName);

  if (user) {
      userCityElement.textContent = user.address.city;
  } else {
      userCityElement.textContent = 'User not found';
  }
});