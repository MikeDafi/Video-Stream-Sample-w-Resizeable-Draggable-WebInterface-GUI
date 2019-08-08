import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";
import Post from "./Post";

class GeneralPage extends React.Component {
  render() {
    var o = this.props.object;
    console.log(o.posts);
    if (o.posts.length === 0) {
      return (
        <div>
          <div>{o.body}</div>
          {/* <p style={{ marginTop: "10px" }}> {o.body}</p> */}

          <img
            style={{ width: "100%", height: "100%" }}
            src={o.link}
            alt="Mike Kaufman's Portfolio"
          />
        </div>
      );
    } else {
      return (
        <>
          <br />
          <div
            style={{
              height: "90%",
              position: "absolute",
              width: "99%",
              overflow: "scroll",
              bottom: "0px",
              left: "1%"
            }}
          >
            {o.posts.map(post => {
              return (
                <div>
                  <Post object={post} />
                </div>
              );
            })}
          </div>
        </>
      );
    }
  }
}

export default GeneralPage;
