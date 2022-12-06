import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ActivityFeed from "../screen/ActivityFeed/ActivityFeed";
import Home from "../screen/Home";

const Router = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/doss_verse_webview" element={<Home />} />
      <Route
        path="/doss_verse_webview/ActivityFeed"
        element={<ActivityFeed />}
      />
      <Route
        path="/doss_verse_webview/SomePage"
        element={
          <div style={{ color: "#fff" }}>
            <div>Some Page</div>
            <button
              onClick={() => {
                navigate("/doss_verse_webview/ActivityFeed");
              }}
            >
              Activity Feed
            </button>
          </div>
        }
      />
    </Routes>
  );
};

export default Router;
