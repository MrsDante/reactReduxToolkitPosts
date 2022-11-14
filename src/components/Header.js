import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>Блог</h1>
        <nav>
            <ul>
                <li><Link to="/">На главную страницу</Link></li>
                <li><Link to="post">Добавить новый пост</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header