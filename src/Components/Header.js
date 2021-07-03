import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../images/logo-svg.svg"

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.logoBox}><img src={Logo} className={classes.logo}></img></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:30,
  },
  appbar: {
    color: "#6C63FF",
    backgroundColor: "#F8F6F6"
  },
  responsive: {
    float:"right",
    height:"550px",
    '@media screen and (max-width: 1024px)': {
      width: "100%",
      height: "auto"
   } 
  },
  logo:{
    height:25
  },
  logoBox:{
    marginLeft:10,
    '@media screen and (max-width: 1024px)': {
      marginLeft:0,
   } 
  }
}));