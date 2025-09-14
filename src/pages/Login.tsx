import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields", { autoClose: 2000 });
      return;
    }

    // Retrieve registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user: any) => user.email === email && user.password === password
    );

    if (!user) {
      toast.error("Invalid email or password", { autoClose: 2000 });
      return;
    }

    // Store logged-in user in sessionStorage (temporary)
    sessionStorage.setItem("currentUser", JSON.stringify(user));

    toast.success("Login successful!", { autoClose: 2000 });
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>

      <ToastContainer />
    </div>
  );
};

export default Login;
