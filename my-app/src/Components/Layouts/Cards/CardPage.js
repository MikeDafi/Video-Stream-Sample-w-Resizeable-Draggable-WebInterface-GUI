import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

import GeneralPage from "./GeneralPage.js";
import BroswerPage from "./BroswerPage.js";
import Explorer from ".././Music/Explorer";
import Music from ".././Music/Music";
class Cardpage extends React.Component {
  state = {
    posts: []
  };

  render() {
    const id = this.props.info;
    const o = this.props.object;
    console.log(id);
    if (id === "About Me" || id === "Posts" || id === "Contact Info") {
      return <GeneralPage object={o} />;
    }
    if (id === "Music Search") {
      return <BroswerPage object={o} />;
    }
    if (id === "Music") {
      return <Music object={o} />;
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
