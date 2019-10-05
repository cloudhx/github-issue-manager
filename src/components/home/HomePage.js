import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>GitHub Issue Manager</h1>
    <p>
      You're a software engineer using GitHub every day and have decided to
      create an application to support your workflow. Specifically, you want to
      be able to list issues/tasks assigned to you and individually mark them as
      closed/resolved.
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
