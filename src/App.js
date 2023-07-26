import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (nName, nAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: nName, age: nAge, id: Math.random().toString() }]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
