import React from "react";
import { connect } from "react-redux";
import * as issueActions from "../../redux/actions/issueActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import IssueList from "./IssueList";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class IssuesPage extends React.Component {
  componentDidMount() {
    const { issues, actions } = this.props;

    if (issues.length === 0) {
      actions.loadIssues().catch(error => {
        alert("Loading issues failed" + error);
      });
    }
  }

  handleClose = async issue => {
    toast.success("Issue closed.");
    try {
      await this.props.actions.closeIssue(issue);
    } catch (error) {
      toast.error("Close failed. " + error.message, { autoClose: false });
    }
  };

  handleRefresh = () => {
    this.props.actions.loadIssues().catch(error => {
      alert("Loading issues failed" + error);
    });
  };

  render() {
    return (
      <>
        <h2>Open Issues</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <IssueList
            issues={this.props.issues}
            onCloseClick={this.handleClose}
            onRefreshClick={this.handleRefresh}
          />
        )}
      </>
    );
  }
}

IssuesPage.propTypes = {
  issues: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    issues: state.issues,
    user: state.user,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadIssues: bindActionCreators(issueActions.loadIssues, dispatch),
      closeIssue: bindActionCreators(issueActions.closeIssue, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesPage);
