import React from "react";


import Header from "./components/Header/Header";
import AppRouter from "./router/Router";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
