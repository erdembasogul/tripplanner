import React from "react";
import Layout from "./layout";
import HomePage from "./pages/HomePage/HomePage";
import Test from "./pages/TripPage/TripPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trip" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default App;
