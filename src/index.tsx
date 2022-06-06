import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage';
import PostPage from './pages/PostPage/PostPage';
import EditPostPage from './pages/EditPostPage/EditPostPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Provider } from 'react-redux';
import Container from '@mui/material/Container';
import store from './redux/store';
import './index.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/post/:id" element={<PostPage/>} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/edit/:id' element={<EditPostPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
