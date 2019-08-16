import React from "react";
// import Toast from "react-bootstrap/Toast";
import Button from "@material-ui/core/Button";
import CardPage from "./Cards/CardPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Widget.css";

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    var removeWidgetByID = this.props.removeWidgetByID;
    // console.log("In Widget: " + this.props.title);
    let o = this.props.object;
    console.log(o.key + "TEST");
    return (
      // <Toast
      //   style={{ width: "100%", height: "100%", position: "relative" }}
      //   onClose={() => removeWidgetByID(this.props.title)}
      //   dismissible="true"
      // >
      //   <Toast.Header>
      //     <strong className="mr-auto">{this.props.title}</strong>
      //     <small>11 mins ago</small>
      //   </Toast.Header>
      <div style={{ textAlign: "center" }} width="100%" height="100%">
        <div>
          {this.props.title}
          <Button
            class="btn btn-light"
            onClick={() => removeWidgetByID(this.props.title)}
          >
            <i class="fa fa-close" /> Close
          </Button>
        </div>
        <CardPage
          id="CardPage"
          object={this.props.object}
          info={this.props.title}
        />
      </div>
      //   </Toast.Body>
      // </Toast>
    );
  }
}

export default Widget;
