import React from "react";
import { Route, Routes } from "react-router-dom";
import ActivityFeed from "../screen/ActivityFeed/ActivityFeed";
import Home from "../screen/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ActivityFeed />} />
      <Route path="/ActivityFeed" element={<Home />} />
      <Route
        path="/SomePage"
        element={<div style={{ color: "#fff" }}>Some Page</div>}
      />
    </Routes>
  );
};

export default Router;
