import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IssueList = ({ issues, closing = false, onCloseClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Labels</th>
        <th>Assignee</th>
        <th>State</th>
        <th />
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
            <td>
              <button
                className="btn btn-outline-danger"
                disabled={closing}
                onClick={() => onCloseClick(issue)}
              >
                {closing ? "Close..." : "Close"}
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

IssueList.propTypes = {
  issues: PropTypes.array.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  closing: PropTypes.bool
};

export default IssueList;
