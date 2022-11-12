import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChange = e => setUserId(e.target.value);


  //const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';
  
  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
          console.error('Неудача', err)
      }  finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ));

  return (
  <section>
    <h2>Добавить новый пост</h2>
    <form>
        <label htmlFor="postsTitle">Название поста:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Автор:</label>
        <select 
          id="postAuthor" 
          value={userId}
          onChange={onAuthorChange} >
            <option value=""></option>
            {usersOptions}
        </select>
        <label htmlFor="postContent">Содержание:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button 
          onClick={onSavePostClicked} 
          disabled={!canSave}
          type="button">Сохранить пост</button>
    </form>
  </section>
  )
}

export default AddPostForm