import posts from "./posts";
const sidebar = [
  {
    key: "About Me",
    index: 0,
    priority: 0,
    dropDown: false,
    fixedAspect: true,
    width: "520px",
    posts: [],
    height: "758px",
    minW: 580,
    minH: 728,
    url: "https://ekktm.sse.codesandbox.io/",
    link: "https://avatars1.githubusercontent.com/u/13594692?s=460&v=4",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    key: "Projects",
    index: 1,
    priority: 0,
    minH: 300,
    posts: [],
    dropDown: true,
    url: "https://yf7oi.sse.codesandbox.io/music",
    width: "520px",
    height: "500px",
    minW: 300,
    link: "https://yf7oi.sse.codesandbox.io/music",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    key: "Contact Info",
    index: 2,
    priority: 0,
    fixedAspect: true,
    posts: [],
    minH: 460,
    minW: 350,
    url: "https://ekktm.sse.codesandbox.io/",
    link: "https://www.thesitewizard.com/img/logo202x42.png",
    dropDown: false,
    width: "350px",
    height: "460px",
    body:
      "I’m sa big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    key: "Posts",
    index: 3,
    posts: posts,
    fixedAspect: false,
    minH: 600,
    minW: 800,
    url: "https://ekktm.sse.codesandbox.io/",
    priority: 0,
    dropDown: false,
    width: "900px",
    height: "800px"
  },
  {
    key: "Resume",
    index: 3,
    posts: [],
    fixedAspect: false,
    minH: 1000,
    minW: 900,
    url: "https://yf7oi.sse.codesandbox.io/resume",
    priority: 0,
    dropDown: false,
    width: "600px",
    height: "800px"
  }
];
export default sidebar;
