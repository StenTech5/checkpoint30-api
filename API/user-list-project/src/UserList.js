import axios from 'axios';

export default function UserList() {
  const userListContainer = document.getElementById('user-list');
  
  // Fetch users from jsonplaceholder API
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data;

      // Map over users to create list items and append to the container
      users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `${user.name} - ${user.email}`;
        userListContainer.appendChild(userItem);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
