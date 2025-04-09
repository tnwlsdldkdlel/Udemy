import classes from "./Post.module.css";

type PostProps = {
  author: string;
  body: string;
};

const Post = ({ author, body }: PostProps) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
};

export default Post;
