import React from "react";
import {Outlet, Routes, Route} from "react-router-dom";

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
      <Route path="/" component={<LayOut />}>
          <Route path="/" component={<MainPage />} />
          <Route path="/" component={<DetailPage />} />
          <Route path="search" component={<SearchPage />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
