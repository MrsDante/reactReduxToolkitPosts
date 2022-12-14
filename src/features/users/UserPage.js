import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
//import { selectPostByUser } from '../posts/postsSlice';
import { selectPostsByUser } from '../posts/postsSlice';
import { selectUserById } from './usersSlice';

const UserPage = () => {
    const { indexId } = useParams()
    const user = useSelector(state => selectUserById(state, Number(indexId)));

    console.log(useParams())

    /*const postsForUser = useSelector(state => {
        const allPosts = selectAllPosts(state)
        //console.log(allPosts.filter(post => post.userId === Number(userId)))
        //console.log(allPosts)
        return allPosts.filter(post => post.userId === Number(indexId))
    });*/

    const postsForUser = useSelector(state => selectPostsByUser(state, Number(indexId)));

    const postTitles = postsForUser.map(post => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ));

  return (
    <section>
        <h2>{user?.name}</h2>
        <ol>{postTitles}</ol>
    </section>
  )
}

export default UserPage