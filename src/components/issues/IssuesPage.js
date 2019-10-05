import React from "react";
import { connect } from "react-redux";
import * as issueActions from "../../redux/actions/issueActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class IssuesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadIssues().catch(error => {
      alert("Loading courses failed" + error);
    });
  }
  render() {
    return (
      <>
        <h2>Issues</h2>
        {this.props.issues.map(issue => (
          <div key={issue.title}>{issue.title}</div>
        ))}
      </>
    );
  }
}

IssuesPage.propTypes = {
  issues: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    issues: state.issues
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(issueActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesPage);
