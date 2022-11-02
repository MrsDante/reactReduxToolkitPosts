import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
        dispatch(
            postAdded(title, content)
        )

        setTitle('');
        setContent('');
    }
  }

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
        <label htmlFor="postContent">Содержание:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button 
          onClick={onSavePostClicked} 
          type="button">Сохранить пост</button>
    </form>
  </section>
  )
}

export default AddPostForm