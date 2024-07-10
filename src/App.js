import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { CssBaseline, Container, Typography } from '@mui/material';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Provider store={store}>
      <CssBaseline />
      <Container>
        <Typography variant="h3" gutterBottom>
          User Management
        </Typography>
        <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <UserList setSelectedUser={setSelectedUser} />
      </Container>
    </Provider>
  );
};

export default App;
