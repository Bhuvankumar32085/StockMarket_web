import { useEffect, useState } from "react";
import axios from "axios";

function Protected() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:3002/api/protected", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setMessage(res.data.message))
    .catch(err => setMessage("Access Denied"));
  }, []);

  return <h2>{message}</h2>;
}

export default Protected;
