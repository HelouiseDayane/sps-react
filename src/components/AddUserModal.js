import React, { useState } from 'react';

const AddUserModal = ({ onAddUser, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = () => {
    const userData = { email, name, password };
    onAddUser(userData);
  };

  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={(e) => { e.preventDefault(); handleAddUser(); }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Add User</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddUserModal;
