import {Route, Routes} from 'react-router-dom';

import css from './App.module.css';
import {
    HomePage,
    NotFoundPage,
    PostsPage,
    PostDetailsPage,
    PostDetailsCommentsPage,
    UsersPage,
    UserDetailsPage,
    UserDetailsPostsPage,
    UserAlbumsPage,
    UserAlbumsPhotosPage
} from './pages';
import {Layout} from './components';

function App() {
  return (
      <div>
          <Routes>
              <Route path={'/'} element={<Layout/>}>

                  <Route path={'/'} element={<HomePage/>}/>

                  <Route path={'users'} element={<UsersPage/>}>
                      <Route path={':userId'} element={<UserDetailsPage/>}>
                          <Route path={'posts'} element={<UserDetailsPostsPage/>}/>
                      </Route>

                      <Route path={':userId/albums'} element={<UserAlbumsPage/>}>
                          <Route path={':albumsId/photos'} element={<UserAlbumsPhotosPage/>}/>
                      </Route>
                  </Route>

                  <Route path={'posts'} element={<PostsPage/>}>
                      <Route path={':postId'} element={<PostDetailsPage/>}>
                          <Route path={'comments'} element={<PostDetailsCommentsPage/>}/>
                      </Route>
                  </Route>

                  <Route path={'*'} element={<NotFoundPage/>}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
