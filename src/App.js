import './App.css';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import EditPostForm from './features/posts/EditPostForm';
import UsersList from './features/users/UsersList';
import UserPage from './features/users/UserPage';

//const CommentPage = React.lazy(() => import("./pages/CommentPage/CommentPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route exact path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":indexId" element={<UserPage />} />
        </Route>
       {/* Если страницы не существует, то вернуться на главную */}
        <Route path="*" element={<Navigate to="/" replace />} />
     
      </Route>
    </Routes>
  );
}

export default App;
