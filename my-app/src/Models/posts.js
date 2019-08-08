const posts = [
  {
    title: "Post 1 -- 12:23 PM 2/17/2019",
    name: "Michael Kaufman - ",
    link: "https://www.holidify.com/images/compressed/attractions/attr_437.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 2 -- 11:21 PM 2/10/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 3 -- 1:19 PM 1/13/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 4 -- 6:44 PM 12/17/2018",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 1 -- 12:23 PM 2/17/2019",
    name: "Michael Kaufman - ",
    link: "https://www.holidify.com/images/compressed/attractions/attr_437.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 2 -- 11:21 PM 2/10/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 3 -- 1:19 PM 1/13/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 4 -- 6:44 PM 12/17/2018",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 1 -- 12:23 PM 2/17/2019",
    name: "Michael Kaufman - ",
    link: "https://www.holidify.com/images/compressed/attractions/attr_437.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 2 -- 11:21 PM 2/10/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 3 -- 1:19 PM 1/13/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 4 -- 6:44 PM 12/17/2018",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 1 -- 12:23 PM 2/17/2019",
    name: "Michael Kaufman - ",
    link: "https://www.holidify.com/images/compressed/attractions/attr_437.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 2 -- 11:21 PM 2/10/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 3 -- 1:19 PM 1/13/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 4 -- 6:44 PM 12/17/2018",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 1 -- 12:23 PM 2/17/2019",
    name: "Michael Kaufman - ",
    link: "https://www.holidify.com/images/compressed/attractions/attr_437.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 2 -- 11:21 PM 2/10/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 3 -- 1:19 PM 1/13/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 4 -- 6:44 PM 12/17/2018",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 1 -- 12:23 PM 2/17/2019",
    name: "Michael Kaufman - ",
    link: "https://www.holidify.com/images/compressed/attractions/attr_437.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 2 -- 11:21 PM 2/10/2019",
    name: "Michael Kaufman - ",
    link: "https://img.gimme.fun/emoji/1f47e.png",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 3 -- 1:19 PM 1/13/2019",
    name: "Michael Kaufman - ",
    link:
      "https://bestcooler.reviews/wp-content/uploads/2016/11/becore-avatar.jpg",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  },
  {
    title: "Post 4 -- 6:44 PM 12/17/2018",
    name: "Michael Kaufman - ",
    link: "https://img.gimme.fun/emoji/1f42f.png",
    body:
      "I’m a big fan of Pat Flynn from Smart Passive Income. Never mind his about page, I love his entire site! It’s so clean and easy to navigate… but back to about pages. His about page shows another great example of sharing some of his personal life successfully. He doesn’t only explain his brand (professional), but shares a family picture (personal). Side note: My favorite part of his podcast episodes are the fun facts in the opening."
  }
];
export default posts;
