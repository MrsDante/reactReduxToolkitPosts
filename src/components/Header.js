import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCount } from '../features/posts/postsSlice';
import { increaseCount } from '../features/posts/postsSlice';

const Header = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount);
  return (
    <header>
        <h1>Блог</h1>
        <nav>
            <ul>
                <li><Link to="/">На главную страницу</Link></li>
                <li><Link to="post">Добавить новый пост</Link></li>
                <li><Link to="user">Пользователи</Link></li>
            </ul>
            <button
              onClick={() => dispatch(increaseCount())}>
             {count}
            </button>
        </nav>
    </header>
  )
}

export default Header