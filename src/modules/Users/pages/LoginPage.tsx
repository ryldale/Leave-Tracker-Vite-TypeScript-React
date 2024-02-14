import { Link } from "react-router-dom";
import classes from "../styles/LoginPage.module.css";
import global from "../../../global.module.css";

const LoginPage = () => {
  return (
    <div className={global.container}>
      <div className={global.centerItems}>
        <div className={classes.card}>
          <h1 className={classes.margin}>LOGIN</h1>
          <div className={`row ${classes.margin}`}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className={`row ${classes.margin}`}>
            <label htmlFor="username">Password:</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className={`row ${classes.margin}`}>
            <button className={`${classes.forgotPass}`}>
              Forgot password?
            </button>
          </div>
          <div className={`row ${classes.margin}`}>
            <Link to="/dashboard">
              <button className={classes.loginBtn}>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
