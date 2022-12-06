import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../api/baseUrl";
import { useGetActivityInterface } from "../models/models";

const useGetActivity = (limit: number, offSet: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activities, setActivities] = useState<useGetActivityInterface[]>([]);
  const [hasMore, setHasMore] = useState(false);
  let cancel: Canceler;
  useEffect(() => {
    setLoading(true);
    setError(false);
    baseUrl
      .get(`GetActivities?limit=${limit}&offset=${offSet}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        if (res.status === 200) {
          if (res.data)
            setActivities((activities) => [...activities, ...res.data]);
        }
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(true);
      });
    return () => cancel();
  }, [limit, offSet]);
  return { loading, error, hasMore, activities };
};
export default useGetActivity;
