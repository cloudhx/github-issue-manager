import React from "react";
import PropTypes from "prop-types";

const IssueList = ({ issues, onCloseClick, onRefreshClick }) => (
  <>
    <button className="btn btn-primary my-2" onClick={() => onRefreshClick()}>
      Refresh
    </button>
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Labels</th>
          <th>Repository</th>
          <th>Created</th>
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
              <td>{issue.repository.full_name}</td>
              <td>{new Date(issue.created_at).toLocaleString()}</td>
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
  </>
);

IssueList.propTypes = {
  issues: PropTypes.array.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired
};

export default IssueList;
