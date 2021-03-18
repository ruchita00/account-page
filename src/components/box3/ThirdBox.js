import React from "react";

import {Paper,Box} from "@material-ui/core";

class ThirdBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();

    this.handleChange = this.handleChange.bind(this);


  }

  initialState() {

    return {
      street_address: "",
      city: "",
      state: "",
      zip_code: "",

    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(ThirdBox(this.state));

  }

  render() {
    return (
      <Paper
        component={Box}
        mt={-25}
        ml={55}
        width="400px"
        height="200px"
        p={2}
        elevation={3}
      >
        <div className="address">
          <form onSubmit={this.handleSubmit}>
            {/* <input
            id="autocomplete"
            className="input-field"
            ref="input"
            type="text"
          /> */}
            <label style={{ display: "inline-block", padding: "10px" }}>
              Address:{" "}
            </label>
            <input
              style={{ padding: "20px", width: "250px", borderRadius: "2px" }}
              name={"street_address"}
              value={this.state.street_address}
              placeholder={"Street Address"}
              onChange={this.handleChange}
            />
            <br />

            <label style={{ display: "inline-block", padding: "20px" }}>
              City:{" "}
            </label>
            <input
              style={{ padding: "10px", borderRadius: "2px" }}
              name={"city"}
              value={this.state.city}
              placeholder={"City"}
              onChange={this.handleChange}
            />
            
            <br />
            <label
              style={{
                display: "inline-block",
                padding: "10px",
                borderRadius: "2px"
              }}
            >
              Zipcode:{" "}
            </label>
            <input
              style={{ padding: "5px" }}
              name={"zip_code"}
              value={this.state.zip_code}
              placeholder={"Zipcode"}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </Paper>
    );
  }
}

export default ThirdBox;
