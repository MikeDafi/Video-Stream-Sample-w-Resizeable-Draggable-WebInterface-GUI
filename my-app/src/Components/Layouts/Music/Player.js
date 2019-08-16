import React from "react";
import Button from "@material-ui/core/Button";
import AudioPlayer from "react-h5-audio-player";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Player.css";

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

    var Player = props => (
      <AudioPlayer
        autoPlay={true}
        src={props.url}
        onPlay={e => console.log("onPlay")}
        onEnded={() => this.props.handleRemoveSong(o)}
        // other props here
      />
    );

    return (
      <>
        <br />
        <div>
          <div>
            <Button
              class="btn btn-light"
              onClick={() => this.props.handleRemoveSong(o)}
            >
              dd
            </Button>
          </div>
          <Player url={o[0].url} />
          <iframe
            src={o[0].url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            //   style={{
            //     position: "absolute",
            //     top: "60px",
            //     right: "0",
            //     paddingBottom: "60px"
            //   }}
            //   width="100%"
            //   height="100%"
            // /
          />
          <br />
          Songs in Queue
          {o.map(song => {
            if (song !== null) {
              return (
                <div>
                  {song.title}
                  {/* {song.url} */}
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
}

export default Player;
