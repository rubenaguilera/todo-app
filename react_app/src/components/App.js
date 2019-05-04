import React from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import '../style/App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
