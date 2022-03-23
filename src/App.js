import React from "react";
import styles from "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
};

export default App;
