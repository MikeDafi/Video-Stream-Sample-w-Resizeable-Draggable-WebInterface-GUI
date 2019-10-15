import React, { Component } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import "react-notifications/lib/notifications.css";

const SortableItem = SortableElement(({ value, ind, loopFunc }) => {
  console.log(loopFunc);
  return (
    <li
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        width: "100%",
        padding: "0 20px",
        background: "#fff",
        borderBottom: "1px solid #efefef",
        boxSizing: "border-box",
        userSelect: "none",
        color: "#333"
      }}
    >
      <img
        style={{ width: "50px", height: "40px" }}
        src={value.thumbnail}
        alt={value.title}
      />
      <span>{value.title}</span>
      <button onClick={(ind) =>loopFunc(ind)}>
        <img
          src="https://image.flaticon.com/icons/svg/61/61794.svg"
          width="24"
          height="24"
          alt="Loop This Video"
          title="Loop This Video"
        />
      </button>
      {value.numberOfLoops}
    </li>
  );
});

const SortableList = SortableContainer(({ items, currentIndex, loopFunc }) => {
  return (
    <ul
      style={{
        listStyleType: "none",
        margin: "0",
        padding: "0",
        overflow: "auto",
        background: "#f3f3f3",
        border: "1px solid #efefef",
        paddding: "0px"
      }}
    >
      {items.map((value, index) => console.log(index + " " + value.title))}
      {items.map((value, index) => {
        if (currentIndex <= index) {
          return (
            <SortableItem
              key={`item-${index}`}
              loopFunc={loopFunc}
              ind={index}
              value={value}
            />
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
});

export default class Queue extends Component {
  componentDidMount() {
    this.props.notificationMessage(
      "The Queue can be rearranged. TRY! Grab a song",
      5000
    );
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    var newArrangementSongs = arrayMove(this.props.songs, oldIndex, newIndex);
    this.props.changedArrangement(newArrangementSongs);
  };
  render() {
    console.log("from queue props, songs.length" + this.props.songs.length);
    return (
      <div display="flex" flex-direction="column" align-items="flexStart">
        <div style={{ textAlign: "center" }}>
          <button onClick={this.props.handleGoBackSong}>
            <img
              src="https://image.flaticon.com/icons/svg/107/107172.svg"
              width="24"
              height="24"
              alt="Previous Track"
              title="Previous Track"
            />
          </button>

          <button onClick={this.props.handlePlaySong}>
            <img
              src="https://image.flaticon.com/icons/svg/109/109525.svg"
              width="24"
              height="24"
              alt="Play Button"
              title="Play Button"
            />
          </button>

          <button onClick={this.props.handleNextSong}>
            <img
              src="https://image.flaticon.com/icons/svg/107/107176.svg"
              width="24"
              height="24"
              alt="Next Track"
              title="Next Track"
            />
          </button>

          <button onClick={() => this.props.handleLoopSong(0)}>
            <img
              src="https://image.flaticon.com/icons/svg/61/61794.svg"
              width="24"
              height="24"
              alt="Loop Current Track"
              title="Loop Current Track"
            />
          </button>
          
        </div>
        <SortableList
          items={this.props.songs}
          currentIndex={this.props.currentIndex}
          onSortEnd={this.onSortEnd}
          loopFunc={this.props.handleLoopSong}
        />
      </div>
    );
  }
}
