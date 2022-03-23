import React from 'react';
import { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Modal from './components/UI/Modal';



function App() {
  const [error, setError] = useState("");
  const [USERS, setUsers] = useState([
    {
      "name": "Jane Doe",
      "age": 19,
    },
    {
      "name": "John Doe",
      "age": 22,
    }
  ])
  const modalOnClickHandler = function () {
    setError("")
  }
  const newUserHandler = (user) => {
    setUsers(prevUsers => [user, ...prevUsers])
  }
  const errorHandler = function (errMsg) {
    setError(errMsg);
  }
  return (
    <div>
      <Modal err={error} onClick={modalOnClickHandler} />
      <UserForm errHandler={errorHandler} onNewUser={newUserHandler} />
      <UserList users={USERS} />
    </div>
  );
}

export default App;
