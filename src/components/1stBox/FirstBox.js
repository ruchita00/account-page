import React from "react";
import SecondBox from "../box2/SecondBox"
import Status from "../1stBox/Status"
import RadioGroup from "./RadioGroup"
import ThirdBox from "../box3/ThirdBox";
import IconButton from "@material-ui/core/IconButton";
import "./FirstBox.css";
import {
  Container,
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    width: "70vw",
    height: "90vh",
    backgroundColor: theme.palette.grey[300]
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "90%",
    height: "30px", // Fix IE 11 issue.
    marginTop: theme.spacing(0)
  },
  input: {
    display: "none"
  }
}));

export default function FirstBox() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {/* <div className="main__firstbox"> */}
      <div className="firstbox__heading">
        <h2>
          My Account <hr />
        </h2>
      </div>
      <Paper component={Box} width="100%" p={2}>
        <Box compoenent="form">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={2}>
              <label>First Name</label>
              <TextField
                autoComplete="fname"
                name="firstname"
                id="firstname"
                label="First Name"
                variant="outlined"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <label>Last Name</label>
              <TextField
                id="standard-error-helper-text"
                autoComplete="lname"
                name="lastname"
                label="Last Name"
                variant="outlined"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <label>Middle Name</label>
              <TextField
                autoComplete="mname"
                name="middlename"
                id="middlename"
                label="Middle Name"
                variant="outlined"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <label>Nick Name</label>
              <TextField
                autoComplete="nickname"
                name="nickname"
                id="nickname"
                label="Nick Name"
                variant="outlined"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={4} style={{display:"flex",justifyContent:"space-between"}}>
              <h4 style={{ margin: "-10px 40px", fontWeight: "200" }}>
                Profile Picture:
                {/* <h5 style={{ margin: "-60px 100px", fontWeight: "500" }}>
                  Change Picture
                </h5> */}
                <Avatar
                  style={{
                    // width: "50px",
                    // height: "50px",
                    borderRadius: "none"
                  }}
                  alt="Remy Sharp"
                  src={
                    "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg"
                  }
                  className={classes.avatar}
                />
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span" style={{fontSize:"10px",margin:"-50px 100px",height:"30px", width:"90px"}}>
                    Change Picture
                  </Button>
                </label>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  ></IconButton>
                </label>
              </h4>
            </Grid>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />

            <RadioGroup />
            <Status />
            <h4 style={{ margin: "30px 30px", fontWeight: "500" }}>
              Change Password
            </h4>
          </Grid>
        </Box>
      </Paper>
      <SecondBox />
      <ThirdBox />
      <Button variant="contained" color="primary" style={{margin:"20px 200px",padding:"3px",width:"400px",height:"30px", fontSize:"10px"}}>
        Save Account Details
      </Button>
    </Container>
  );
}
