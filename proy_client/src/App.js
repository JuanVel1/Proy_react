import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component>
                  <h2>Child Component</h2>
                </route.component>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}
