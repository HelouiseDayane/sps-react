import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = async (userData) => {
    try {
      await axios.post('http://localhost:3001/api/users', userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      // Refresh the user list after adding a new user
      const response = await axios.get('http://localhost:3001/api/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUsers(response.data);
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleEditUser = async (editedUserData) => {
    try {
      await axios.put(`http://localhost:3001/api/users/${editedUserData.email}`, editedUserData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      // Refresh the user list after editing a user
      const response = await axios.get('http://localhost:3001/api/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUsers(response.data);
      setShowEditModal(false);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const handleDeleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:3001/api/users/${email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      // Refresh the user list after deleting a user
      const response = await axios.get('http://localhost:3001/api/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Users List</h2>
      <button onClick={() => setShowAddModal(true)}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            {user.name} - {user.email}
            <button onClick={() => { setSelectedUser(user); setShowEditModal(true); }}>Edit</button>
            <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
          </li>
        ))}
      </ul>
      {showAddModal && <AddUserModal onAddUser={handleAddUser} onClose={() => setShowAddModal(false)} />}
      {showEditModal && <EditUserModal user={selectedUser} onEditUser={handleEditUser} onClose={() => setShowEditModal(false)} />}
    </div>
  );
};

export default UsersList;
