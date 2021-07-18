import { useState, useEffect } from "react";
import axios from "axios";
export default function useFindUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function findUser() {
      await axios
        .get("/api/auth/user")
        .then((res) => {
          console.log(res.data);
          setUser(res.data.uid);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
    findUser();
  }, []);
  return {
    user,
    isLoading,
  };
}
