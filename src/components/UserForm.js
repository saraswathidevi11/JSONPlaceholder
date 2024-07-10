import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, editUser } from '../redux/slices/userSlice';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

const UserForm = ({ selectedUser, setSelectedUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: '', email: '' });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(editUser(user));
    } else {
      dispatch(createUser({ ...user, id: Date.now() }));
    }
    setUser({ name: '', email: '' });
    setSelectedUser(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {selectedUser ? 'Edit User' : 'Add User'}
      </Typography>
      <Paper style={{ padding: '16px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {selectedUser ? 'Update' : 'Create'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UserForm;
