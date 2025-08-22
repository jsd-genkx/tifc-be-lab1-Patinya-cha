import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let post = [];
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: post.length + 1,
    title: title,
    content: content,
  };

  postMessage.push(newPost);

  res.status(201).json(newPost);
});
//start the server
app.listen(port, () => {
  console.log(`Server runing at ${port}`);
});
