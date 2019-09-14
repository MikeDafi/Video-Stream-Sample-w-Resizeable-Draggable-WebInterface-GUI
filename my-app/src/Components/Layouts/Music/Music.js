import React from "react";

import Player from "./Player";
import SearchBar from "./MusicHelpers/SearchBar";
import VideoList from "./MusicHelpers/VideoList";
import YTSearch from "youtube-api-search-v2";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import dotenv from "dotenv";
dotenv.config();

class Music extends React.Component {
  o = this.props.object;


  API_KEY = "AIzaSyCjrxao94e7VRodCe9Y8wTR3gSyMs2JzcA";
  
  //AIzaSyDAlcDNtu7eOxCGky__zvlLYkFxg3N-aSc";

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      videos: [],
      search: true,
      selectedVideo: {},
      showPlayer: false
    };
  }

  componentDidMount() {
    NotificationManager.info(
      "This is the Music Player. Search for a song. Add to the Queue.",
      "Music Player",
      5000
    );
  }

  // handleRemoveSong = songIndex => {
  //   var oldSongs = this.state.songs;
  //   oldSongs.splice(songIndex, 1);

  //   // alert("in handler: old songs " + oldSongs);
  //   // alert("in handler: songs is " + this.state.songs1);
  //   this.setState({
  //     songs: oldSongs
  //   });
  //   this.forceUpdate();
  // };

  hidePlayer = () => {
    this.setState({
      showPlayer: false,
      songs: []
    });
  };

  videoSearch(term) {
    if (this.state.search) {
      YTSearch(
        { key: this.API_KEY, term: term, maxResults: 50, type: "video" },
        data => {
          try {
            if (data && data.data && data.data.error.message) {
              console.log(data);
            }
            this.setState({ videos: data, selectedVideo: data[0] });
            console.log(this.state.videos);
          } catch (err) {
            NotificationManager.error(
              "Youtube data API daily limit have exceeded. Quota will be recharged at 1:30pm IST. Wait till then.",
              "Daily Limit Exceeded",
              5000
            );
          }
        }
      );
    }
    this.forceUpdate();
  }

  handleChange = value => {
    setTimeout(() => {
      if (value === "") {
        this.setState({ videos: [], selectedVideo: null });
        return;
      }

      if (this.state.search) {
        this.videoSearch(value);
      }

      setTimeout(() => {
        this.setState({ search: true });
      }, 5000);
    }, 2000);
  };

  //Handlers for Explorer
  handleSearch() {}
  handleAddSong(userSelected) {
    var duplicatedSongs = this.state.songs;
    const videoId = this.state.videos[userSelected].id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const title = this.state.videos[userSelected].snippet.title;
    const thumbnail = this.state.videos[userSelected].snippet.thumbnails.default
      .url;

    const singleSong = {
      url: url,
      title: title,
      thumbnail: thumbnail,
      numberOfLoops: 0
    };

    duplicatedSongs.push(singleSong);

    this.setState({
      showPlayer: true,
      selectedVideo: this.state.videos[userSelected],
      songs: duplicatedSongs
    });
    this.forceUpdate();
  }

  changedArrangement(newlyArrangedSongs) {
    console.log("in the changed arrangment");
    this.setState({
      songs: newlyArrangedSongs
    });

   
    this.forceUpdate();
  }

  notificationMessage = (message, timeout) => {
    NotificationManager.info(message, "Music Player", timeout);
  };

  render() {
    var handleAddSong = this.handleAddSong.bind(this);
    return (
      <div
        id="idk"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "99.5%",
          height: "100%",
          marginLeft: ".25%"
        }}
      >
        <NotificationContainer />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <SearchBar
            videos={this.state.videos}
            video={this.state.selectedVideo}
            onChange={this.handleChange}
            handleSearch={video => {
              this.setState({
                selectedVideo: this.state.videos[video],
                search: false
              });
            }}
          />
        </div>
        <div>
          {this.state.showPlayer === true ? (
            <Player
              songs={this.state.songs}
              handleHidePlayer={this.hidePlayer}
              // handleRemoveSong={this.handleRemoveSong.bind(this)}
              changedArrangement={this.changedArrangement.bind(this)}
              notificationMessage={this.notificationMessage}
            />
          ) : null}
        </div>
        <div>
          {/* <VideoDetail video={this.state.selectedVideo} /> */}
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.handleAddSong.bind(this)}
          />
        </div>
      </div>
    );
  }
}

// <div>
//   <br />
//   <input
//     type="text"
//     value={this.props.searchString}
//     ref="searchStringInput"
//     onchange={this.handleChange}
//   />
//   {/*
//   <Search /> */}
//   <Player
//     songs={this.state.songs}
//     handleRemoveSong={handleRemoveSong.bind(this)}
//   />
//   <Explorer />
// </div>
//     );
//   }
// }

export default Music;
