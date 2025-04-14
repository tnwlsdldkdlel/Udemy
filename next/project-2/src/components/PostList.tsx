import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

const INITIAL_POST = { body: "", name: "" };
type Post = {
  body: string;
  name: string;
};

type PostListProps = {
  isOpen: boolean;
  onModal: () => void;
};

const PostList = ({ isOpen, onModal }: PostListProps) => {
  const [post, setPost] = useState<Post>(INITIAL_POST);
  const [list, setList] = useState<Post[]>([]);

  const handlePost = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setPost({ ...post, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setList((data) => [...data, post]);
    onModal();
    resetPost();
  };

  const resetPost = () => {
    setPost(INITIAL_POST);
  };

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClick={onModal}>
          <NewPost
            post={post}
            onPost={handlePost}
            onCancel={onModal}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        {list.map((data, index) => {
          return (
            <Post
              key={index}
              author={data.name}
              body={data.body}
              onClick={onModal}
            />
          );
        })}
      </ul>
    </>
  );
};

export default PostList;
