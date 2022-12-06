import { useState, useRef, useCallback } from "react";
import Activity from "../../components/Activity/Activity";
import useGetActivity from "../../hooks/useGetActivity";
import styles from "./ActivityFeed.module.scss";
import moments from "moment";

const ActivityFeed = () => {
  const [offSet, setOffSet] = useState(0);
  const { loading, hasMore, activities } = useGetActivity(20, offSet);
  const observer = useRef<any>();
  const lastActivity = useCallback(
    (node: any) => {
      if (loading) {
        return;
      }
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffSet((prev) => prev + 20);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  const getTime = (time: string) => {
    const date = moments(time);
    const now = moments();
    return now.diff(date, "days")
      ? now.diff(date, "days") + "d"
      : now.diff(date, "hours")
      ? now.diff(date, "hours") + "h"
      : now.diff(date, "minutes")
      ? now.diff(date, "minutes") + "m"
      : now.diff(date, "seconds") + "s";
  };

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <div className={styles.dossActivity}>Doss Activity</div>
        <div className={styles.subHeading}>
          View all the activities happening on the DOSS app in realtime
        </div>
      </header>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {activities.map((item, index) => {
          if (activities.length === index + 1) {
            return (
              <div ref={lastActivity} key={index + 1}>
                <Activity
                  time={getTime(item.NotificationTime)}
                  description={item.Description}
                  tag={item.Type}
                />
              </div>
            );
          } else {
            return (
              <div key={index + 1}>
                <Activity
                  time={getTime(item.NotificationTime)}
                  description={item.Description}
                  tag={item.Type}
                />
              </div>
            );
          }
        })}
      </div>
      {loading && hasMore && <div>loading..</div>}
    </div>
  );
};

export default ActivityFeed;
