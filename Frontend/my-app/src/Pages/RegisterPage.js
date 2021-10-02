import React from "react";
import SignUp from "../Components/SignUp";
import classes from '../css/RegisterPage.module.css'

function RegisterPage() {
  return (
    <div className={classes.signUpPage}>
      <SignUp className={classes.signUpForm} />
    </div>
  );
}

export default RegisterPage;
