import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShowPostPage } from "./pages/ShowPostPage/ShowPostPage";
import { EditPostPage } from "./pages/EditPostPage/EditPostPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Provider } from "react-redux";
import Container from "@mui/material/Container";
import { store } from "./redux/store";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<ShowPostPage />} />
            <Route path="/edit/:id" element={<EditPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
     
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
