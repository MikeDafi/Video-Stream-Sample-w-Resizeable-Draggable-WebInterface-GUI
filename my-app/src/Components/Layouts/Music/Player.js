import React from "react";
import Button from "@material-ui/core/Button";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Player.css";
import ReactPlayer from "react-player";
import Queue from "./Queue";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: this.props.songs
    };
  }

  render() {
    var handle = this.props.handleRemoveSong;
    var o = this.props.songs;
    // alert("Player's songs is " + o);

    return (
      <>
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 0 65%" }}>
            <ReactPlayer
              url={this.state.songs[0].url}
              playing
              controls
              onEnded={() => this.props.handleRemoveSong(0)}
            />
          </div>

          <div style={{ flex: "1", overflowY: "scroll", height: "360px" }}>
            Queue <Queue songs={this.state.songs} />
          </div>
        </div>
        <div class="d-flex justify-content-center" style={{ margin: "15px" }}>
          <Button
            class="btn btn-primary btn-lg"
            onClick={() => this.props.handleRemoveSong(0)}
          >
            Next Song
          </Button>
        </div>
      </>
    );
  }
}

export default Player;
