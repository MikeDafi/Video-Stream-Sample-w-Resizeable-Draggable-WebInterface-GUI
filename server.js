const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const ytdl = require("ytdl-core");
var util = require("util"),
  http = require("http");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static(path.join("/", "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views" + "/index.htm"));
});

app.get("/resume", function(req, res) {
  res.sendFile(path.join(__dirname + "/views" + "/resume.htm"));
});

app.get("/download", (req, res) => {
  var URL = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: "mp4"
  }).pipe(res);
});

function removeDuplicateUsingFilter(arr) {
  let unique_array = arr.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  return unique_array;
}

app.get("/music", function(req, res) {
  var QUERY = req.query.QUERY;
  var name = QUERY;
  var src =
    "http://www.groovydomain.com/gallery/music/ORIGINAL/Cyndi%20Lauper/She%60s%20So%20Unusual/04%20Time%20After%20Time.mp3";

  var request = require("request");
  var fakeData = [];
  request({ uri: "http://jukebox.pierrevanlierop.nl/The90s/" }, function(
    error,
    response,
    body
  ) {
    //check body for all mp3 tags
    var list = [];
    var ii = body.split('"');
    for (const i in ii) {
      for (const w in ii[i]) {
        const word = ii[i];
        if (word[word.length - 2] === "p" && word[word.length - 1] === "3") {
          list.push("http://jukebox.pierrevanlierop.nl/The90s/" + word);
        }
      }
    }

    fakeData = [
      {
        name: body,
        src: src
      },
      {
        name: name,
        src: src
      },
      {
        name: name,
        src: src
      },
      {
        name: name,
        src: src
      }
    ];
    res.render(__dirname + "/views" + "/music", {
      fakeData: removeDuplicateUsingFilter(list)
    });
  });

  // https://github.com/ogt/google-search-results-parser
  // for result.link in results
  // grab all mp3 links and render them in divs

  // res.sendFile(path.join(__dirname + "/views" + "/music.htm"));
});

app.get("/video", function(req, res) {
  const path = "assets/sample.mp4";
  var URL = req.query.URL;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  const video = ytdl(URL, {
    format: "mp4"
  });
  var num = 0;
  // Example of choosing a video format.
  ytdl.getInfo(URL, (err, info) => {
    if (err) throw err;
    let format = ytdl.chooseFormat(info.formats, { quality: "134" });
    if (format) {
      num = format.clen;
      console.log("Format found!" + num);
      console.log(format);
      console.log("orig file size " + fileSize);
    }
  });

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : num - 1;

    const chunksize = end - start + 1;
    // const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${num}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4"
    };

    res.writeHead(206, head);
    video.pipe(res);
  } else {
    const head = {
      "Content-Length": num,
      "Content-Type": "video/mp4"
    };
    res.writeHead(200, head);
    video.pipe(res);
  }
});

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});
