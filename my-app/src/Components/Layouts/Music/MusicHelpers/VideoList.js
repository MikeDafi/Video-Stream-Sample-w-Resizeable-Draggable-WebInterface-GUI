import React, { Component } from "react";
import VideoListItem from "./VideoListItem";
import { List } from "antd";
import InfiniteScroll from "react-infinite-scroller";

class VideoList extends Component {
  state = {
    data: [],
    listSize: 5
  };

  loadMore() {
    this.setState({
      listSize: this.state.listSize + 5
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    if (this.props.videos.length === 0) {
      return (
        <List
          style={{ justifyContent: "center", alignItems: "center" }}
          size={"large"}
          header={<div>Video Suggestions</div>}
          bordered
          overflow="auto"
          dataSource={this.state.data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      );
    }

    const videoItems = this.props.videos
      .slice(0, this.state.listSize)
      .map((video, index) => {
        return (
          <VideoListItem
            key={index}
            video={video}
            onUserSelected={this.props.onVideoSelect.bind(this, [index])}
          />
        );
      });

    return (
      <div style={{ height: "700px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore.bind(this)}
          hasMore={this.state.listSize < 50 ? true : false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          <ul
            style={{
              height: "100%",
              width: "100%",
              listStyle: "none",
              padding: "5px",
              border: "1px solid #efefef",
              marginBottom: "3px",
              borderRadius: "5px",
              overflow: "auto"
            }}
          >
            {videoItems}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}

export default VideoList;
