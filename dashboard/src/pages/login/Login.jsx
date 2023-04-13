import { useState, useContext } from "react";
import "./login.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import BadgeIcon from "@mui/icons-material/Badge";
import useFetch from "../../useFetch";
import bcrypt from "bcryptjs";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:8000/users");

  const { login, isAuthenticated } = useContext(AuthContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.trim() === "") {
      setErrorMessage("Please enter a username");
    } else if (password.trim() === "") {
      setErrorMessage("Please enter a password");
    } else if (!users) {
      setErrorMessage("Loading user data, please wait...");
    } else {
      const user = users.find((user) => user.username === username);

      if (!user) {
        setErrorMessage("Username not found");
      } else {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          setErrorMessage("Incorrect password");
        } else {
          setErrorMessage("");
          console.log("Successful login!");
          login(user);
        }
      }
    }
  };

  return (
    <div className="main">
      {/* {!isAuthenticated && <p>Please log in to access the page.</p>} */}
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <AccountCircleIcon
                style={{ color: "rgb(42,98,147)", fontSize: 150 }}
              />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <BadgeIcon
                  style={{ color: "rgb(42,98,147)", fontSize: 30 }}
                  className="iconL"
                />
                <input
                  type="text"
                  placeholder="username"
                  className="name input"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="second-input">
                <KeyIcon
                  style={{ color: "rgb(42,98,147)", fontSize: 30 }}
                  className="iconL"
                />
                <input
                  type="password"
                  placeholder="password"
                  className="name input"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="login-button">
                <button className="buttonL" disabled={isPending}>
                  Login
                </button>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
