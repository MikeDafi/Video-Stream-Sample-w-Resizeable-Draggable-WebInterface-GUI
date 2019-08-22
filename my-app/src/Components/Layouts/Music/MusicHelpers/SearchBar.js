import React, { Component } from "react";
import { AutoComplete, Button, Icon } from "antd";
const Option = AutoComplete.Option;
class SearchBar extends Component {
  state = {
    videos: [],
    currentSearch: ""
  };

  componentDidUpdate(prevProps) {
    if (this.props.video && prevProps.video !== this.props.video) {
      this.setState({ videos: this.props.videos });
    }
  }

  onSelect = (value, index) => {
    let val = parseInt(index.key, 10);
    alert(val);
    this.props.handleSearch(val);
  };

  handleCurrentSearch(search) {
    this.setState({
      currentSearch: search
    });
  }

  render() {
    this.handleCurrentSearch = this.handleCurrentSearch.bind(this);
    return (
      <div id="music" style={{ textAlign: "center", padding: "35px" }}>
        {/* <AutoComplete
          size={"large"}
          style={{ width: 400 }}
          onSelect={this.onSelect}
          onChange={this.props.onChange}
          placeholder="Search Video"
        >
          {/* {this.state.videos.map((video, index) => (
            <Option key={index}>{video.snippet.title}</Option>
          ))} */}
        {/* </AutoComplete> */}
        <input
          onChange={event => this.handleCurrentSearch(event.target.value)}
          onC
          placeholder="Search Video"
        />
        <Button
          style={{ marginLeft: "5px" }}
          size={"large"}
          onClick={() => this.props.onChange(this.state.currentSearch)}
          // onSelect{}
        >
          <Icon type={"search"} />
        </Button>
      </div>
    );
  }
}

export default SearchBar;
