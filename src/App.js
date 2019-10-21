import React, { useState } from 'react';

import './css/App.css';
import AddForm from './forms/AddForm';
import EditForm from './forms/EditForm';
import UserList from './UsersLIst';
import api from './api';

function App() {

  const [isEdit, setIsEdit] = useState(false)
  const [users, setUsers] = useState(api.users.getlist().slice())
  const [currentUser, setCurrentUser] = useState([])

  const createUser = user => {
    setUsers(api.users.getlist().slice())
  }

  const deleteUser = user => {
    setUsers(api.users.getlist().slice())
  }

  const editUser = user => {
    setIsEdit(true)
    setCurrentUser(user)
  }

  const updateUser = user => {
    setIsEdit(false)
    setUsers(api.users.getlist().slice())
  }

  return (
    <div className="">          
          <h1 className="main-container">Basic CRUD</h1>
          <div className="main-container user-form">
             {isEdit ? 
          (<EditForm 
            currentUser={currentUser} 
            setIsEdit={setIsEdit} 
            updateUser={updateUser} />
          ):
          (<AddForm createUser={createUser} />)} 
          </div>         
          <div className="main-container">
            <UserList 
            users={users} 
            editUser={editUser} 
            deleteUser={deleteUser} />
          </div>          
        </div>      
  );
}

export default App;
