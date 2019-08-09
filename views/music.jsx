var React = require("react");

function music(props) {
  return (
    <>
      {props.fakeData.map(data => {
        return (
          <figure>
            <figcaption>{data}</figcaption>
            <p id="output" />
            <audio controls src={data}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        );
      })}
    </>
  );
}

module.exports = music;

// <!-- <html>
//   <head>
//     <title >Video stream sample</title>
//     <style>

//     </style>
//   </head>
//   <body>
// <embed src="" type="audio/mpeg" width="100%" height="100%" />

//   </body>
// </html>
// </html> -->
