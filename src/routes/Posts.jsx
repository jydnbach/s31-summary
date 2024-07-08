import { useState } from 'react';

import PostList from '../components/PostList';
import { Outlet, useLoaderData } from 'react-router-dom';

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const res = await fetch('http://localhost:8080/posts');
  const data = await res.json();

  return data.posts;
}
