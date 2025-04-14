import classes from "./NewPost.module.css";

// interface : TypeScript에서 객체의 구조를 정의하는데 사용되는 키워드. 확장이나 병합이 필요할 때 유리함.
// type : 객체타입 뿐만 아니라 다양한 타입을 정의할 수 있는 키워드
interface NewPostProps {
  post: {
    body: string;
    name: string;
  };
  onPost: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onSubmit: (event: React.FormEvent) => void;
  onCancel: () => void;
}

// React.FC : 컴포넌트의 타입을 정의하는 제네릭 타입 -> children을 포함한 props를 자동으로 추가해준다.
// 요즘엔 React.FC를 사용하지 않는 추세
// htmlFor : 해당 id의 label을 클릭하면 해당 id를 가진 input이 focus된다.
const NewPost = ({ post, onPost, onSubmit, onCancel }: NewPostProps) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          value={post.body}
          onChange={onPost}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          value={post.name}
          required
          onChange={onPost}
        />
      </p>
      <p className={classes.actions}>
        <button type="submit" className={classes.button} onClick={onSubmit}>
          Submit
        </button>
        <button type="button" className={classes.button} onClick={onCancel}>
          Cancel
        </button>
      </p>
    </form>
  );
};

export default NewPost;
