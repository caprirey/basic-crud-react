import React, { useState, useEffect } from 'react'
import api from '../api'

const EditForm = props => {
  const [user, setUser] = useState(props.currentUser)  

  useEffect(
    () => {
      setUser(props.currentUser)      
    },
    [props]
  )

  const handleChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    api.users.update(user)
    props.updateUser(user)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>Name</label>
      <input type="text" name="username" value={user.username} onChange={handleChange} />
      <label>Username</label>
      <input type="email" name="email" value={user.email} onChange={handleChange} />
      <button>Update user</button>
      <button onClick={() => props.setIsEdit(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditForm
