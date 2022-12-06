import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/doss_verse_webview/ActivityFeed");
        }}
      >
        Activity Feed
      </button>
    </div>
  );
};

export default Home;
