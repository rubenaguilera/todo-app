import React from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import '../style/App.css';
import 'react-block-ui/style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
