import React, { Component } from "react";
import { Rnd } from "react-rnd";

import Sidebar from "./Layouts/Sidebar";
import Widget from "./Layouts/Widget";

class App extends Component {
  constructor(props) {
    super(props);

    // var handleToUpdateFromSidebar = this.handleToUpdateFromSidebar.bind(this);
    // var removeWidgetByID = this.removeWidgetByID.bind(this);
    this.state = {
      x: 20,
      viewIt: true,
      widgets: []
    };
  }

  handleToUpdateFromSidebar(someArg) {
    if (this.checkIfAlreadyExists(someArg.key)) {
      alert("This application already exists");
    } else {
      let application = someArg;
      application.priority = this.state.widgets.length;
      this.state.widgets.push(application);
      this.state.widgets.forEach(x => console.log(x));
      this.forceUpdate();
    }
  }

  searchForIndexOfObjectByNameKey(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].key === nameKey) {
        // console.log("searchforindex returned " + i);
        return i;
      }
      // console.log("searchforindex returned " + myArray[i].key);
    }
    // console.log("searchforindex returned nthing" + nameKey);
  }
  checkIfAlreadyExists(nameOfApplication) {
    for (var x = 0; x < this.state.widgets.length; x++) {
      if (this.state.widgets[x].key === nameOfApplication) {
        return true;
      }
    }
    return false;
  }
  removeWidgetByID(key) {
    let index = this.searchForIndexOfObjectByNameKey(key, this.state.widgets);
    if (index > -1) {
      let widgetCpy = this.state.widgets;
      widgetCpy[index] = 1;
      this.setState({ widgets: widgetCpy });
      // console.log("in remove widget +");
      // console.log(widgetCpy);
    }
  }

  // eventLogger = (e: MouseEvent, data: Object) => {
  //   // console.log("Event: ", e);
  //   // console.log("Data: ", data);
  // };

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,

      top: this.state.top + deltaY
    });
  };

  handleShow = () => this.setState({ show: true });

  changeZIndexHelper = (prevState, key) => {
    let widgetsCopy = this.state.widgets;
    let nextLowest = { priority: 0, index: 0 };
    let first = false;
    for (var x = 0; x < widgetsCopy.length; x++) {
      for (var y = 0; y < widgetsCopy.length; y++) {
        console.log(widgetsCopy[y]);
        if (widgetsCopy[y].key === key && !false) {
          widgetsCopy[y].priority = widgetsCopy.length - 1;
          nextLowest.priority = widgetsCopy[y].priority - 1;
          nextLowest.index = y;

          first = true;
          continue;
        }

        if (
          y !== nextLowest.index &&
          nextLowest.priority + 1 === widgetsCopy[y].priority &&
          first
        ) {
          widgetsCopy[y].priority = nextLowest.priority;
          nextLowest.index = y;
          nextLowest.priority -= 1;
        }
      }
    }
    this.setState({ widgets: widgetsCopy });
  };

  update() {
    this.rnd.updateSize({ width: 200, height: 300 });
  }

  render() {
    var removeWidgetByID = this.removeWidgetByID;

    var handleToUpdateFromSidebar = this.handleToUpdateFromSidebar;

    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    if (this.state.widgets.length === 0) {
      return (
        <div id="header">
          <Sidebar
            handleToUpdateFromSidebar={handleToUpdateFromSidebar.bind(this)}
          />
        </div>
      );
    } else {
      // console.log("all widgets");
      // for (var x = 0; x < this.state.widgets.length; x++) {
      //   console.log(this.state.widgets[x]);
      // }
      return (
        <div id="header2">
          <Sidebar
            handleToUpdateFromSidebar={handleToUpdateFromSidebar.bind(this)}
          />
          {this.state.widgets.map(obj => {
            if (obj !== 1) {
              return (
                <div>
                  <Rnd
                    lockAspectRatio={obj.fixedAspect}
                    enableUserSelectHack={true}
                    default={{
                      x: 0,
                      y: 0,
                      width: obj.width,
                      height: obj.height
                    }}
                    style={{
                      border: "solid 1px #9CD0EA",
                      borderInline: "#000000",
                      background: "#FFFFFF",
                      zIndex: obj.priority
                    }}
                    cancel="#idk"
                    minWidth={obj.minW}
                    minHeight={obj.minH}
                    onMouseDown={() =>
                      this.changeZIndexHelper(this.state, obj.key)
                    }
                    resizeGrid={[25, 25]}
                    //dragGrid={[25, 25]}
                    {...dragHandlers}
                  >
                    <Widget
                      removeWidgetByID={removeWidgetByID.bind(this)}
                      show={this.state.viewIt}
                      title={obj.key}
                      object={obj}
                    />
                  </Rnd>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    }
  }
}

export default App;
