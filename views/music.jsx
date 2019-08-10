// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>My First React Example</title>
//   </head>
//   <body>
//     <div id="greeting-div"></div>

//     <script src="https://fb.me/react-15.0.0.js"></script>
//     <script src="https://fb.me/react-dom-15.0.0.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
//     <script type="text/babel">
//       var Greeting = React.createClass({
//         render: function() {
//           return (
//             <p>Hello, Universe</p>
//           )
//         }
//       });

//       ReactDOM.render(
//         <Greeting/>,
//         document.getElementById('greeting-div')
//       );
//     </script>
//   </body>
// </html>

var React = require("react");

// //You need this npm package to do createReactClass
// var createReactClass = require('create-react-class');

//     module.exports=createReactClass({
//             render:function(){
//                 return(
//                     <div>
//                         <h1> the list  </h1>
//                     </div>
//                 )
//             }

function music(props) {
  return (
    <>
      {/* <label for="site-search">Search the site: {props.q}</label>
      <input
        type="search"
        id="site-search"
        name="q"
        placeholder={props.q}
        aria-label="Search through site content"
      />

      <form method="get" action="/music?QUERY=jikkkk">
        <button type="submit">Continue</button>
      </form> */}

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
