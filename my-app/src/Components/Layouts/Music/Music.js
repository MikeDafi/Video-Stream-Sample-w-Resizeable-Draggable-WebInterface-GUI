import React from "react";

import Explorer from "./Explorer";
import Player from "./Player";
import SearchBar from "./MusicHelpers/SearchBar";
import VideoList from "./MusicHelpers/VideoList";
import VideoDetail from "./MusicHelpers/VideoDetail";
import YTSearch from "youtube-api-search-v2";

import { Icon, notification } from "antd";
import dotenv from "dotenv";
dotenv.config();

class Music extends React.Component {
  o = this.props.object;
  API_KEY = "AIzaSyDAlcDNtu7eOxCGky__zvlLYkFxg3N-aSc";

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      videos: [],
      search: true,
      selectedVideo: {}
    };

    this.welcomeMessage();
  }

  // shouldComponentUpdate(nextProps) {
  //   // alert(this.props.songs);
  //   // alert("in should compo update " + nextProps.songs);
  //   return false;
  // }

  handleRemoveSong = songIndex => {
    var oldSongs = this.state.songs;
    oldSongs.splice(songIndex, 1);

    // alert("in handler: old songs " + oldSongs);
    // alert("in handler: songs is " + this.state.songs1);
    this.setState({
      songs: oldSongs
    });
    this.forceUpdate();
  };

  welcomeMessage = () => {
    notification.open({
      message: "Michael Squared Music App",
      description: "Let us start by searching for some videos",
      icon: <Icon type="smile" style={{ color: "#108ee9" }} />
    });
  };

  videoSearch(term) {
    if (this.state.search) {
      YTSearch({ key: this.API_KEY, term: term, maxResults: 50 }, data => {
        try {
          if (data && data.data && data.data.error.message) {
            console.log(data);
            throw "error";
          }
          this.setState({ videos: data, selectedVideo: data[0] });
          console.log(this.state.videos);
        } catch (err) {
          notification["error"]({
            message: "Daily Limit Exceeded",
            description:
              "Youtube data API daily limit have exceeded. Quota will be recharged at 1:30pm IST. Wait till then."
          });
        }
      });
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
      thumbnail: thumbnail
    };

    duplicatedSongs.push(singleSong);

    this.setState({
      selectedVideo: this.state.videos[userSelected],
      songs: duplicatedSongs
    });
    this.forceUpdate();
  }

  // handleChange(event) {
  //   this.o.url = event.target.value.toLowerCase();
  // }

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
          {this.state.songs.length > 0 ? (
            <Player
              songs={this.state.songs}
              handleRemoveSong={this.handleRemoveSong.bind(this)}
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
