import React,{Component} from "react"
import AddressItem from "@material-ui/core"

export default class AddressSuggest extends Component {
  render() {
    return (
      <AddressItem
        label="Address"
        value={this.props.query}
        placeholder="start typing"
      />
    );
  }
}
