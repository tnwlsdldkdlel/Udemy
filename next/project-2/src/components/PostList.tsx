import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

type Post = {
  body: string;
  name: string;
};

const PostList = () => {
  const [post, setPost] = useState<Post>({
    body: "",
    name: "",
  });

  const handlePost = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setPost({ ...post, [id]: value });
  };

  return (
    <>
      <NewPost post={post} onPost={handlePost} />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="rest.js is awesome!" />
        <Post author="Manuel" body="check out the full course" />
      </ul>
    </>
  );
};

export default PostList;
