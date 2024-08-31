import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { userData } from "../Lib/Dummy";
import { useState } from "react";

/*eslint-disable react/prop-types */
function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const userFound =
      userData.email === email && userData.password === password;

    if (userFound) {
      setUser(true);
      navigate("/");
      toast.success("Login successful!");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <div className="formContainer ">
        <form onSubmit={handleLogin}>
          <h1 className="text-center font-bold text-2xl text-[#536cb0]">
            Welcome back
          </h1>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer hidden md:flex">
        <img
          src="https://github.com/safak/react-estate-ui/blob/completed/public/bg.png?raw=true"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
