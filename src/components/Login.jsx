import { useState } from "react";
import { Button, Container, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const USE_MOCK_AUTH = true; // Toggle this to true for mock authentication

const MOCK_USER = {
  email: "admin@example.com",
  password: "password"
};

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (USE_MOCK_AUTH) {
      // Mock Authentication
      if (credentials.email === MOCK_USER.email && credentials.password === MOCK_USER.password) {
        localStorage.setItem("auth", "true");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  const handleGoogleLogin = async () => {
    if (USE_MOCK_AUTH) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
      return;
    }

    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } catch (error) {
      alert("Google Sign-in failed");
    }
  };

  return (
    <Container className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Typography variant="h4" className="mb-4">Login</Typography>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <TextField
          label="Email"
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          className="bg-white rounded"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          className="bg-white rounded"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
      </form>
      <Button
        onClick={handleGoogleLogin}
        variant="contained"
        color="secondary"
        className="mt-4"
        fullWidth
      >
        Login with Google
      </Button>
    </Container>
  );
}

export default Login;
