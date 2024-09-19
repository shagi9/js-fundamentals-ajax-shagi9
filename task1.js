// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

const ulElement = document.getElementsByClassName('usersList')[0];
const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

const data = await getData('https://jsonplaceholder.typicode.com/users');

data.forEach(item => {
  const todoLi = document.createElement("li");
  todoLi.textContent = item.name;

  ulElement.append(todoLi);
});