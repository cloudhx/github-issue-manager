import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="jumbotron">
      <div class="text-center my-5">
        <p>To access your issues, please sign in with your GitHub token</p>
        <Link to="token" className="btn btn-primary btn-lg mt-1">
          Sign in with your GitHub Token
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
