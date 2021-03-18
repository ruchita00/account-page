import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {Grid} from "@material-ui/core"

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 1
  },
  group: {
    margin: `${theme.spacing.unit}px 1`
  }
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: "female"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl
          component="fieldset"
          className={classes.formControl}
        ></FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup
            aria-label="Status"
            name="status"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            row={true}
          >
            <FormControlLabel
              value="Single"
              control={<Radio color="primary" />}
              label="Single"

            />
            <FormControlLabel
              value="Married"
              control={<Radio color="primary" />}
              label="Married"
              labelPlacement="start"
            />
          </RadioGroup>

        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired
};
<Grid item xs={12} sm={4}>
  <h4 style={{ margin: "-10px 40px", fontWeight: "200" }}>
    Profile Picture:
    <h5 style={{ margin: "-60px 100px", fontWeight: "500" }}>Change Picture</h5>
  </h4>
</Grid>;

export default withStyles(styles)(RadioButtonsGroup);
