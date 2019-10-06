import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IssueList = ({ issues }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Labels</th>
        <th>Assignee</th>
        <th>State</th>
      </tr>
    </thead>
    <tbody>
      {issues.map(issue => {
        return (
          <tr key={issue.id}>
            <td>
              <a className="btn btn-light" href={issue.html_url}>
                Watch
              </a>
            </td>
            <td>
              <Link to={"/issue/" + issue.number}>{issue.title}</Link>
            </td>
            <td>{issue.labels.map(label => label.name)}</td>
            <td>{issue.assignee.login}</td>
            <td>{issue.state}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

IssueList.propTypes = {
  issues: PropTypes.array.isRequired
};

export default IssueList;
