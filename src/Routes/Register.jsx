import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1 className="text-center font-bold text-2xl text-[#d1b899]">
            Create an Account
          </h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img
          src="https://github.com/safak/react-estate-ui/blob/completed/public/bg.png?raw=true"
          alt=""
        />
      </div>
    </div>
  );
}

export default Register;
