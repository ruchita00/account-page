import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
// import App1 from "./App1"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginTop: theme.spacing(9),
    margin: theme.spacing(3),
    flexDirection: "column",
    alignItems: "center"
  },
  inputField: {
    width: "100%",
    height: "50px",
    margin: theme.spacing(1, 0)
  }
}));

export default function SecondBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper
        component={Box}
        mt={3}
        width="400px"
        height="200px"
        p={2}
        elevation={3}
      >
        <div>
          <label
            style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "2px"
            }}
          >
            Email:{" "}
          </label>
          <input
            style={{ padding: "10px", borderRadius: "2px" }}
            type="email"
            name="email"
          />
          <br />
          <label
            style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "2px"
            }}
          >
            Alternative Email:{" "}
          </label>
          <input
            style={{ padding: "10px", borderRadius: "2px" }}
            type="email"
            name="email"
            class="form-control"
            aria-describedby="emailHelp"
          />
          <br />
          <label
            style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "2px"
            }}
          >
            Phone Number:{" "}
          </label>
          <input
            style={{ padding: "10px", borderRadius: "2px" }}
            type="phone number"
            name="Phone Number"
          />
          <br />
          <label
            style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "2px"
            }}
          >
            Alternative Number:{" "}
          </label>
          <input
            style={{ padding: "10px", borderRadius: "2px" }}
            type="phone number"
            name="phone number"
          />
          {/* <App1 /> */}
        </div>
      </Paper>
      {/* </Paper> */}
    </div>
  );
}
