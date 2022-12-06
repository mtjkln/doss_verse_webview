import React from "react";

import styles from "./Header.module.scss";
import doss_logo from "../../assets/doss_logo.png";
import dossGem from "../../assets/doss_gem.png";
import dossToken from "../../assets/dossToken.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameAndLogo}>
        <img className={styles.dossLogo} alt="doss logo" src={doss_logo} />
        <div>Doss</div>
      </div>
      <div className={styles.currencies}>
        <div className={styles.dossGem}>
          <img alt="doss gem" className={styles.dossLogo} src={dossGem} />
          <div>2450</div>
        </div>
        <div className={styles.dossToken}>
          <img alt="doss gem" className={styles.dossLogo} src={dossToken} />
          <div>2450</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
