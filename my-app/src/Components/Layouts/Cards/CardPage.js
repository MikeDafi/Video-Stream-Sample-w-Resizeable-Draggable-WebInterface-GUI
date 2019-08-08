import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import axios from "axios";
import Ytdl from "./ytdl";
import AboutMe from "./AboutMe.js";

class Cardpage extends React.Component {
  state = {
    posts: []
  };

  render() {
    var id = this.props.info;
    var o = this.props.object;
    console.log(id);
    if (id == "About Me" || id == "Posts" || id == "Contact Info") {
      return <AboutMe object={o} />;
    } else {
      return (
        <>
          <br />

          <iframe
            src={o.url}
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
}

export default Cardpage;
