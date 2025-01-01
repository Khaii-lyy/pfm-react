import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersRequest, loadUsersSuccess, loadUsersFailure } from '../redux/actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const usersLoading = useSelector((state) => state.users.loading);

  useEffect(() => {
    if (users.length === 0 && !usersLoading) {
      dispatch(loadUsersRequest());
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          dispatch(loadUsersSuccess(response.data));
        })
        .catch((error) => {
          dispatch(loadUsersFailure(error.message));
        });
    }
  }, [dispatch, users.length, usersLoading]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (users.length === 0) {
      setError('Users not loaded yet. Please wait.');
      return;
    }

    const teacher = users[0];
    const student = users[1];

    if (email === teacher.email && password === teacher.username) {
      navigate('/teacherdash');
    } else if (email === student.email && password === student.username) {
      navigate('/studentdash');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  if (usersLoading) {
    return <div>Loading users...</div>;
  }

  if (users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <section className="login-section">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;