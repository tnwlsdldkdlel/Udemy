import classes from "./Post.module.css";

type PostProps = {
  author: string;
  body: string;
  onClick: () => void;
};

const Post = ({ author, body, onClick }: PostProps) => {
  return (
    <li className={classes.post} onClick={onClick}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
};

export default Post;
