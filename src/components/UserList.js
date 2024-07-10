import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../redux/slices/userSlice';
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Paper,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const UserList = ({ setSelectedUser }) => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      <Paper>
        <List>
          {users.map((user) => (
            <ListItem key={user.id} divider>
              <ListItemText primary={user.name} secondary={user.email} />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleEdit(user)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" onClick={() => handleDelete(user.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default UserList;
