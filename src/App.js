import React from "react";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
