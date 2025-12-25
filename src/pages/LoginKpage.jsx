import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    // Example: Hardcoded users (frontend only)
    const validUsers = [
      { username: "admin", password: "admin123", role: "Admin" },
      { username: "teacher", password: "teacher123", role: "Teacher" },
      { username: "student", password: "student123", role: "Student" },
    ];

    const user = validUsers.find(
      (u) => u.username === username && u.password === password && u.role === role
    );

    if (!user) {
      setError("Invalid credentials or role");
      return;
    }

    login(user.username, user.role);

    // Redirect based on role
    if (user.role === "Admin") navigate("/admin");
    if (user.role === "Teacher") navigate("/teacher");
    if (user.role === "Student") navigate("/student");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Admin</option>
            <option>Teacher</option>
            <option>Student</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
