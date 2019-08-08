import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

export default class AboutMe extends React.Component {
  state = {
    posts: []
  };
  render() {
    var o = this.props.object;
    return (
      <div>
        <div>{o.body}</div>
        {/* <p style={{ marginTop: "10px" }}> {o.body}</p> */}

        {o.posts.map(post => {
          return post.key;
        })}
        <img
          style={{ width: "100%", height: "100%" }}
          src={o.link}
          alt="Mike Kaufman's Portfolio"
        />
      </div>
    );
  }
}
