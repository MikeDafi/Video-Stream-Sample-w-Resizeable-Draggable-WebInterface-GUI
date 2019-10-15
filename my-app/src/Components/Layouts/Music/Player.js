import React from "react";
import Button from "@material-ui/core/Button";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import Queue from "./Queue";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true,
      currentIndex: 0,
      songs: this.props.songs
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.songs !== this.props.songs) {
      this.setState({
        songs: this.props.songs
      });
    }
  }

  handleGoBackSong = () => {
    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 }, () => {
        console.log("this is it" + this.state.currentIndex);
      });
    }
  };

  handlePlaySong = () => {
    this.setState({
      play: !this.state.play
    });
  };

  onPause(event) {
    this.setState({
      play: false
    });

    event.preventDefault();
  }

  onPlay(event) {
    this.setState({
      play: true
    });

    event.preventDefault();
  }

  onEnded(event) {
    this.setState({
      play: true
    });

    event.preventDefault();
  }

  handleNextSong = () => {
    if (this.state.currentIndex + 1 === this.state.songs.length) {
      this.props.handleHidePlayer();
    } else {
      this.setState({
        play: true,
        currentIndex: this.state.currentIndex + 1
      });
    }
  };

  handleLoopSong(index ) {
    console.log("in handleLoopSong ");
    if (this.state.songs.length > 0) {
      var newSongs = this.state.songs;
      console.log(index);

      console.log(newSongs);
      newSongs[index].numberOfLoops++;
      this.setState({
        songs: newSongs
      });
      console.log("hi there");
      console.log(this.state.songs);
      this.props.changedArrangement(this.state.songs);
    }
  }

  render() {
    // alert("Player's songs is " + o);
    console.log("from player, songs.length " + this.state.songs.length);
    return (
      <>
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 0 65%" }}>
            {this.state.songs[this.state.currentIndex].title}
            <ReactPlayer
              url={this.state.songs[this.state.currentIndex].url}
              playing={this.state.play}
              onPause={e => this.onPause.bind(this)}
              onPlay={e => this.onPlay.bind(this)}
              //onEnded={e => this.onEnded.bind(this)}
              controls
              onEnded={() => this.props.handleRemoveSong(0)}
            />
          </div>

          {this.state.songs.length > 0 ? (
            <div style={{ flex: "1", overflowY: "scroll", height: "360px" }}>
              Queue{" "}
              <Queue
                songs={this.state.songs}
                currentIndex={this.state.currentIndex}
                changedArrangement={this.props.changedArrangement}
                handleGoBackSong={this.handleGoBackSong}
                handleNextSong={this.handleNextSong}
                handlePlaySong={this.handlePlaySong}
                handleLoopSong={this.handleLoopSong.bind(this)}
                notificationMessage={this.props.notificationMessage}
              />
            </div>
          ) : null}
        </div>
        <div class="d-flex justify-content-center" style={{ margin: "15px" }} />
      </>
    );
  }
}

export default Player;
