import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,

    backgroundColor: theme.palette.background.paper,

    padding: theme.spacing(1)
  }
}));
export default class AboutMe extends React.Component {
  state = {
    posts: []
  };
  render() {
    var id = this.props.info;
    var o = this.props.object;
    return (
      <div>
        <div className={classes.root}>{o.body}</div>
        {/* <p style={{ marginTop: "10px" }}> {o.body}</p> */}

        {o.posts.map(post => {
          return post.key;
        })}
        <img style={{ width: "100%", height: "100%" }} src={o.link} />
      </div>
    );
  }
}
