import React from "react";
import { connect } from "react-redux";
import * as issueActions from "../../redux/actions/issueActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class IssuesPage extends React.Component {
  state = {
    issue: {
      title: ""
    }
  };

  handleChange = event => {
    const issue = { ...this.state.issue, title: event.target.value };
    this.setState({ issue });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createIssue(this.state.issue);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Issues</h2>
        <h3>Add Issue</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.issue.title}
        />

        <input type="submit" value="Save" />
        {this.props.issues.map(issue => (
          <div key={issue.title}>{issue.title}</div>
        ))}
      </form>
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
