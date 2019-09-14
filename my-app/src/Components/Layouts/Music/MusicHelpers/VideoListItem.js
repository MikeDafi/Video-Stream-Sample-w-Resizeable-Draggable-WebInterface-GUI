import React, { Component } from "react";
class VideoListItem extends Component {
  render() {
    const video = this.props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
      <li
        onClick={() => this.props.onUserSelected()}
        style={{
          display: "flex",
          //justifyContent: "left",
          border: "1px solid #efefef",
          marginBottom: "3px",
          borderRadius: "5px"
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ left: "auto", float: "left" }}>
            <img
              src={imageUrl}
              alt={video.snippet.title}
              style={{ margin: "5px" }}
            />
            <span style={{ color: "#444" }}>{video.snippet.title}</span>
          </div>

          <button
            type="button"
            className="btn btn-light"
            style={{ right: "0px", margin: "21px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
