import React from "react";
import {Outlet, Routes, Route} from "react-router-dom";
import Nav from './component/Nav';
import Footer from './component/Footer';
import MainPage from "./view/MainPage";
import DetailPage from "./view/DetailPage";
import SearchPage from "./view/SearchPage";

const LayOut = () => {
  return (
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
  )
}

const App = () => {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<LayOut />}>
          <Route index element={<MainPage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
