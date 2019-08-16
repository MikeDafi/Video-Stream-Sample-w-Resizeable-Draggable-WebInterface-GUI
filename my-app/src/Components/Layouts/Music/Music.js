import React from "react";

import Explorer from "./Explorer";
import Player from "./Player";
import Search from "./Search";
import SearchBar from "./MusicHelpers/SearchBar";
import VideoList from "./MusicHelpers/VideoList";
import VideoDetail from "./MusicHelpers/VideoDetail";
import YTSearch from "youtube-api-search";

import { Icon, notification } from "antd";
import dotenv from "dotenv";
dotenv.config();

class Music extends React.Component {
  o = this.props.object;
  API_KEY = "AIzaSyDAlcDNtu7eOxCGky__zvlLYkFxg3N-aSc";

  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {
          url: "",
          title: ""
        }
      ],
      videos: [],
      search: true,
      selectedVideo: {}
    };

    // {
    //   url:
    //     "http://jukebox.pierrevanlierop.nl/The90s/217.%20Shaggy%20-%20Boombastic%20(August%201995).mp3",
    //   title: "boomtastic"
    // },
    // {
    //   url:
    //     "http://jukebox.pierrevanlierop.nl/The90s/218.%20Bruce%20Springstein%20-%20Secret%20Garden%20(May%201995).mp3",
    //   title: "mah boy bruce"
    // },
    // {
    //   url:
    //     "http://jukebox.pierrevanlierop.nl/The90s/302.%20Blessid%20Union%20of%20Souls%20-%20Let%20Me%20Be%20The%20One%20(October%201995).mp3",
    //   title: "union idk fukc"
    // },
    // {
    //   url:
    //     "http://jukebox.pierrevanlierop.nl/The90s/303.%20Ace%20of%20Base%20-%20The%20Sign%20(February%201994).mp3",
    //   title: "Ace- Sign"
    // }

    this.welcomeMessage();
  }

  shouldComponentUpdate(nextProps) {
    // alert(this.props.songs);
    // alert("in should compo update " + nextProps.songs);
    return false;
  }

  handleRemoveSong = obj => {
    var oldSongs = obj;
    oldSongs.shift();
    // alert("in handler: old songs " + oldSongs);
    // alert("in handler: songs is " + this.state.songs1);
    if (oldSongs.length !== 0) {
      this.setState({
        songs: oldSongs
      });
      this.forceUpdate();
    }
  };

  welcomeMessage = () => {
    notification.open({
      message: "Michael Squared Music App",
      description: "Let us start by searching for some videos",
      icon: <Icon type="smile" style={{ color: "#108ee9" }} />
    });
  };

  videoSearch(term) {
    // alert("term is " + term + " and this.state.search is " + this.state.search);
    if (this.state.search) {
      // alert("outside search");
      YTSearch({ key: this.API_KEY, term }, data => {
        // alert("in ytsearch");
        try {
          if (data && data.data && data.data.error.message) {
            console.log(data);
            // alert("thrown error");
            throw "error";
          }
          this.setState({ videos: data, selectedVideo: data[0] });
          // alert(this.state.videos);
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
    // alert(this.state.videos);
    this.forceUpdate();
  }

  handleChange = value => {
    // alert("at handleChange and value is " + value);
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
    const url = `https://p5tc8.sse.codesandbox.io/video?URL=https://www.youtube.com/watch?v=${videoId}`;
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
    // alert("here");
    this.forceUpdate();
  }

  // handleChange(event) {
  //   this.o.url = event.target.value.toLowerCase();
  // }

  render() {
    var handleAddSong = this.handleAddSong.bind(this);
    return (
      <div
        id="music"
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
          <Player
            songs={this.state.songs}
            handleRemoveSong={this.handleRemoveSong.bind(this)}
          />
        </div>
        <div style={{ display: "flex" }}>
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
