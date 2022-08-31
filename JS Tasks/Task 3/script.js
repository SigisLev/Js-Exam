/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

fetch('https://api.github.com/users')
  .then((res) => res.json())
  .then((data) => {
    document.getElementById('btn').addEventListener('click', (e) => {
      e.preventDefault();
      return renderUsers(data);
    });
  });

function renderUsers(users) {
  const outputContainer = document.getElementById('output');
  const usersContainer = document.createElement('div');
  usersContainer.className = 'users-container';

  users.forEach((user) => {
    const login = document.createElement('h2');
    const img = document.createElement('img');
    const card = document.createElement('div');
    card.className = 'user-card';

    login.textContent = user.login;
    img.src = user.avatar_url;

    outputContainer.append(usersContainer);
    usersContainer.append(card);
    card.append(login, img);

    const removeMsg = (document.getElementById('message').style.display =
      'none');
  });
}
