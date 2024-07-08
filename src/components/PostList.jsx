import { useState } from 'react';

import Modal from './Modal';
import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value);
  }

  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Chris " body="Javascript is also fun" />
      </ul>
    </>
  );
}

export default PostList;
