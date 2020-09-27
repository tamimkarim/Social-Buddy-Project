import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    
    title: {
      flexGrow: 1,
    },
  }),
);

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          
           <Link to="/" style={{ textDecoration: 'none', marginLeft: '1.5rem', color: 'white' }}>
           <Button color="inherit">Social Buddy</Button>
            </Link>
          </Typography>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
};

export default NavBar;