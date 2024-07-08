import { useState } from 'react';

import Modal from './Modal';
import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]); //callback to update state
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Chris " body="Javascript is also fun" />
      </ul>
    </>
  );
}

export default PostList;
