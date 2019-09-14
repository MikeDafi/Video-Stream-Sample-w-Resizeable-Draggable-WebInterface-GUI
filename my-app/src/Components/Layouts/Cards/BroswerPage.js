import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

class BroswerPage extends React.Component {
  handleChange(event) {
    this.o.url = event.target.value.toLowerCase();
    this.forceUpdate();
  }
  o = this.props.object;
  render() {
    return (
      <>
        <br />
        <input
          type="text"
          value={this.props.searchString}
          ref="searchStringInput"
          onchange={this.handleChange}
        />
        <iframe
          src={this.o.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          style={{
            position: "absolute",
            top: "60px",
            right: "0",
            paddingBottom: "60px"
          }}
          width="100%"
          height="100%"
        />
      </>
    );
  }
}

export default BroswerPage;
