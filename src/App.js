import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    setUserList(prevList => {
      const updatedList = [...prevList];
      updatedList.push({ username: user.username, age: user.age, id: Math.random().toString()});
      return updatedList;
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
