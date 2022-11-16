import { useSelector } from 'react-redux';
import { getPostsStatus, getPostsError, selectPostIds } from './postsSlice';
//import { useEffect } from 'react';
import PostsExcerpt from './PostsExcerpt';

//selectPostIds,
const PostsList = () => {

  const orderedPostIds = useSelector(selectPostIds)
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === 'loading') {
      content = <p>"Загрузка..."</p>;
  } else if (postStatus === 'succeeded') {
      content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
  } else if (postStatus === 'failed') {
      content = <p>{error}</p>;
  }

  return (
      <section>
          {content}
      </section>
  )
}

export default PostsList;