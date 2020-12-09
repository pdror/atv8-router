import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navigation: {
    paddingRight: 20
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/homepage" style={{color: 'white'}} activeStyle={{color: 'yellow'}}>
          <h3 className={classes.navigation}>Página Inicial</h3>
          </Link>
          <Link to="/new" style={{color: 'white'}}>
          <h3 className={classes.navigation}>Cadastro</h3>
          </Link>
          <Link to="/about" style={{color: 'white'}}>
          <h3 className={classes.navigation}>Sobre</h3>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}