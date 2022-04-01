import React from 'react';
import { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
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
    <Fragment>
      {ReactDOM.createPortal(<Modal err={error} onClick={modalOnClickHandler} />, document.querySelector("#modal-root"))}
      <UserForm errHandler={errorHandler} onNewUser={newUserHandler} />
      <UserList users={USERS} />
    </Fragment>
  );
}

export default App;
