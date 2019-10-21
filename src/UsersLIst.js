import React from 'react'
import api from './api'

const UserList = props => (
  
  <table className="main-container">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button  
              onClick = { () => (props.editUser(user)) } 
              className="button muted-button">
                Edit
              </button>
              <button 
              onClick={ () => {api.users.remove(user); 
              props.deleteUser(user)} } 
              className="button muted-button">
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserList