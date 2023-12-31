/* eslint-disable react/no-children-prop */
import { useEffect, useState } from "react";
import Input from "../../components/Input/input";
import styles from "./login.module.css";
import Button from "../../components/Button/button";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/Register/validationactions";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "./loginSchema";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const { loading, userInfo } = useSelector((state) => state.validation);

  useEffect(() => {
    if (userInfo?.data?.token) {
      navigate("/landingpage");
    }
  }, [navigate, userInfo?.data?.token]);

  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    loginSchema,
    onSubmit: (value) => {
      dispatch(
        userLogin({
          email_address: value.email,
          password: value.password,
        })
      );
    },
  });
  const visible = () => {
    setTogglePassword(togglePassword ? false : true);
  };

  return (
    <div className={styles.signin_container}>
      <div className={styles.signin_container_heading}>
        <h1 className={styles.signin_container_heading_h1}>
          Great to see you again
        </h1>
        <p className={styles.signin_container_heading_p}>
          Please login to your account
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <p>Email</p>
        <Input
          maininput={false}
          name="email"
          value={formik.email_address}
          onchange={formik.handleChange}
          type="email"
          placeholder="Enter Email"
        />
        <p className={styles.error}>{formik.errors.email}</p>

        <p>Password</p>
        <div className={styles.icon}>
          <Input
            maininput={false}
            name="password"
            value={formik.password}
            onchange={formik.handleChange}
            type={togglePassword ? "show" : "password"}
            placeholder="*************"
          />
          <div className={styles.hideicon} onClick={visible}>
            {togglePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
          <p className={styles.error}>{formik.errors.password}</p>
        </div>

        <Button
          children="Login"
          mainbutton={false}
          type="submit"
          loading={loading}
          disabled={!formik.isValid}
        />
      </form>
      <div className={styles.span}>
        <span>
          Don’t have an account?{" "}
          <Link to="/signup" className={styles.span__login}>
            Sign Up
          </Link>
          |Reset Password
        </span>
      </div>
    </div>
  );
};

export default Login;
