import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Img from "../images/svgPic.svg"

export default function ContentContainer() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <div className={classes.visible1}><img src={Img} className={classes.responsive}></img></div>
      <div className={classes.container1}> 
        <iframe className={classes.responsiveIframe} src="https://react-widget-upload.netlify.app/"></iframe>
      </div>
      <div className={classes.visible2}><img src={Img} className={classes.responsive}></img></div>
      </div>
    );
}



const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    paddingLeft:40,
    '@media screen and (max-width: 1024px)': {
      paddingLeft:15,
      paddingRight:15,
      display:"block"
   } 
  },
  heading: {
      fontWeight: "bold",
      fontSize: "1.4rem",
      textAlign: "justify",
      letterSpacing:" 0.05em",
      color: "#6C63FF",
      marginTop:40,
      '@media screen and (max-width: 1024px)': {
        fontSize: "1.1rem",
        marginTop:20,
    } 
  },
  form:{
    marginTop:20,
    marginTop:10,
    marginBottom:10,
    fontWeight:"normal",
    fontSize: 14,
    letterSpacing: "0.05em",
    color: "#114433",
    width:"100%"
  },
  heading2: {
    fontWeight:"normal",
    fontSize: 14,
    letterSpacing: "0.05em",
    color: "#114433",
  },
  heading3: {
    marginTop:10,
    marginBottom:10,
    fontWeight:"normal",
    fontSize: 14,
    letterSpacing: "0.05em",
    color: "#114433",
  },
  btn:{
    backgroundColor:"#6C63FF",
    color:"white",
    fontWeight: "bold",
    letterSpacing:"0.1em",
    "&:hover": {
      backgroundColor:"#5b52ea",
    }
  },
  responsive: {
    float:"right",
    height:"550px",
    '@media screen and (max-width: 1024px)': {
      width: "100%",
      height: "auto",
      marginBottom:50
   } 
  },
  visible1:{
    display:"none",
    '@media screen and (max-width: 1024px)': {
      display:"block",
   } 
  },
  visible2:{
    display:"block",
    '@media screen and (max-width: 1024px)': {
      display:"none",
   } 
  },
  container1: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    paddingTop: '56.25%' /* 16:9 Aspect Ratio */
  },
  
  responsiveIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
  }
}));