import classes from './PostList.module.css';
import Post from './Post';

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Max" body="React is fun" />
      <Post author="Chris " body="Javascript is also fun" />
    </ul>
  );
}

export default PostList;
