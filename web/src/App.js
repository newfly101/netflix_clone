import React from "react";
import {Outlet, Routes, Route} from "react-router-dom";
import Nav from './components/header/Nav';
import Footer from './components/footer/Footer';
import MainPage from "./components/main/Main";
import DetailPage from "./components/detail/Detail";
import SearchPage from "./components/search/Search";
import styles from "./App.module.css";

const LayOut = () => {
  return (
      <>
        <Nav />
          <div className={styles.container}>
              <Outlet /> {/* 현재 라우터에 따라 변경 되는 내용 */}
          </div>
        <Footer />
      </>
  )
}

const App = () => {
  return (
  <div className={styles.app}>
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
