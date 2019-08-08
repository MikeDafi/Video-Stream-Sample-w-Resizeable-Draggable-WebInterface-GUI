import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { render } from "jade";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   },
//   inline: {
//     display: "inline"
//   }
// }));

export default class AlignItemsList extends React.Component {
  render() {
    // const classes = useStyles();
    const o = this.props.object;
    return (
      // <List className={classes.root}>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={o.link} />
          </ListItemAvatar>
          <ListItemText
            primary={o.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  // className={classes.inline}
                  color="textPrimary"
                >
                  {o.name}
                </Typography>
                {o.body}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    );
  }
}
