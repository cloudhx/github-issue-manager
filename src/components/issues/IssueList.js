import React from "react";
import PropTypes from "prop-types";

const IssueList = ({ issues, onCloseClick }) => (
  <table className="table">
    <thead>
      <tr>
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
              <a
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {issue.title}
              </a>
            </td>
            <td>
              {issue.labels.map(label => (
                <React.Fragment key={label.id}>
                  <span className="badge badge-primary">{label.name}</span>
                  <span> </span>
                </React.Fragment>
              ))}
            </td>
            <td>{issue.assignee.login}</td>
            <td>{issue.state}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onCloseClick(issue)}
              >
                Close
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
  onCloseClick: PropTypes.func.isRequired
};

export default IssueList;
