import {Route, Routes} from 'react-router-dom';

import css from './App.module.css';
import {
    HomePage,
    NotFoundPage,
    UsersPage,
    PostsPage,
    SingleUserPage,
    SinglePostPage,
    SinglePostCommentPage,
    SingleUserPostsPage
} from './pages';
import {Layout} from './components';



function App() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route path={'/'} element={<HomePage/>}/>
                  <Route path={'users'} element={<UsersPage/>}>
                      <Route path={':userId'} element={<SingleUserPage/>}>
                          <Route path={'posts'} element={<SingleUserPostsPage/>}/>
                      </Route>
                  </Route>
                  <Route path={'posts'} element={<PostsPage/>}>
                      <Route path={':postId'} element={<SinglePostPage/>}>
                          <Route path={'comments'} element={<SinglePostCommentPage/>}/>
                      </Route>
                  </Route>
                  <Route path={'*'} element={<NotFoundPage/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;
