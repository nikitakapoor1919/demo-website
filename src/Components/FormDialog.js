import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Tick from "../images/tick.gif"
import { Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const hiddenFileInput = React.useRef(null);
  const [SelectedFile, setSelectedFile] = React.useState(null);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    setSelectedFile(event.target.files[0])
    const timer1 = setTimeout(() => {
      props.onProgressChange(true)
    }, 1000);  
    const timer = setTimeout(() => {
      props.onProgressChange(false)
      props.onSuccessChange(true)
      handleClickOpen()
    }, 7000);  
  };
  const classes = useStyles();
  return (
    <div>
    {SelectedFile ? <div>
          <p>File Name: {SelectedFile.name}</p>        
          <p>File Type: {SelectedFile.type}</p>         
       </div>:""}
      {SelectedFile ?
       <Button variant="contained" disabled fullWidth className={classes.btn} onClick={handleClick} startIcon={<CloudUploadIcon />}>
       UPLOAD
     </Button>
       :
       <Button variant="contained" fullWidth className={classes.btn} onClick={handleClick} startIcon={<CloudUploadIcon />}>
       UPLOAD
     </Button>}
    <input type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display:'none'}} 
    /> 
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogContent>
          <Typography align="center">
          <img src={Tick} className={classes.tick}></img>
          </Typography>
          <Typography className={classes.heading}>UPLOADED SUCCESSFULLY</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
                OK  
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  btn:{
      backgroundColor:"#6C63FF",
      color:"white",
      fontWeight: 600,
      letterSpacing:"0.1em",
      marginTop:20,
      marginBottom:80,
      borderRadius:8,
      "&:hover": {
        backgroundColor:"#5b52ea",
      }
    },
    heading: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      textAlign: "justify",
      letterSpacing:" 0.05em",
      color: "#6C63FF",
      '@media screen and (max-width: 1024px)': {
        fontSize: "1.1rem",
        marginTop:20
     } 
  },
  dialog:{
      
      '@media screen and (max-width: 1024px)': {
          width: "100%",
       } 
  }
}));