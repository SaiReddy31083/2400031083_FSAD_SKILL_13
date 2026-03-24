import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/message`)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error(err);
        setError("Failed to connect to backend");
      });

    fetch(`${process.env.REACT_APP_API_URL}/students`)
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => {
        console.error(err);
        setError("Failed to connect to backend");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Skill 13 Deployment Demo</h1>
      {error ? <h2>{error}</h2> : <h2>{message}</h2>}

      <h3>Student List</h3>
      <ul style={{ listStyle: "none" }}>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;