import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../src/components/PrivateRoute';
import Login from '../src/components/Login';
import UsersList from '../src/components/UsersList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/users" element={
          <PrivateRoute>
            <UsersList />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
