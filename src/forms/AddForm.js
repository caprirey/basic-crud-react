import React, { useState } from 'react'
import api from '../api';
import '../css/App.css';

function AddForm(props) {

  const [user, setUser] = useState({ username: '', password: '' })

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    api.users.create(user);
    setUser({ username: '', password: '' })
    props.createUser(user)    
  }


  return (
    <div className="">      
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          value={user.username}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
        />
        <button>Add user</button>
      </form>
    </div>
  );
}


export default AddForm