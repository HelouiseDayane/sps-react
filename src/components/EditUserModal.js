import React, { useState, useEffect } from 'react';

const EditUserModal = ({ user, onEditUser, onClose }) => {
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail(user.email);
    setName(user.name);
  }, [user]);

  const handleEditUser = () => {
    const editedUserData = { email, name, password };
    onEditUser(editedUserData);
  };

  return (
    <div>
      <h3>Edit User</h3>
      <form onSubmit={(e) => { e.preventDefault(); handleEditUser(); }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} readOnly />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditUserModal;
