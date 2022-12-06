import React from "react";
import { IActivity } from "../../models/models";
import styles from "./Activity.module.scss";
import dossTournament from "../../assets/dossTournament.png";
import { useNavigate } from "react-router-dom";

const Activity: React.FC<IActivity> = ({ time, tag, description }) => {
  const activityTag = [
    "Tournament",
    "Tournament",
    "Coupons",
    "Wallet Activated",
    "Refer",
  ];
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.tag}>#{activityTag[tag]}</div>
      <div className={styles.activity}>
        <img
          alt="doss tournament"
          className={styles.icon}
          src={dossTournament}
        />
        <div className={styles.descriptionAndTime}>
          <div className={styles.description}>
            {description}
            {". "}
          </div>
          <div className={styles.time}>{time}</div>
        </div>
      </div>

      <button
        onClick={() => navigate("/SomePage")}
        style={{
          backgroundColor:
            tag === 0 || tag === 1
              ? "#256EFF"
              : tag === 2 || tag === 3
              ? "#F44B72"
              : "#FFC83F",
        }}
        className={styles.button}
      >
        {tag === 0 || tag === 1
          ? "Play Tournament"
          : tag === 2
          ? "Reedeem Coupon"
          : tag == 3
          ? "Activate Wallet"
          : "Refer and Earn"}
      </button>
    </div>
  );
};

export default Activity;
