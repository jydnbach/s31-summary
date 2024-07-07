import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Max" body="React is fun" />
        <Post author="Chris " body="Javascript is also fun" />
      </ul>
    </>
  );
}

export default PostList;
