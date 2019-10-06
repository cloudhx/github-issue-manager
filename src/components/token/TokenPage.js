import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveToken } from "../../redux/actions/tokenActions";
import { loadUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import TokenForm from "./TokenForm";

function TokenPage({ user, saveToken, loadUser, history, ...props }) {
  const [token, setToken] = useState(props.token);
  const [errors, setErrors] = useState({});

  useEffect(() => {}, []);

  function handleChange(event) {
    const { value } = event.target;
    setToken(value);
  }

  function handleSave(event) {
    event.preventDefault();
    saveToken(token);
    loadUser().catch(error => {
      alert("Loading authors failed" + error);
    });
    history.push("/issues");
  }

  return (
    <TokenForm
      token={token}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

TokenPage.propTypes = {
  token: PropTypes.string.isRequired,
  saveToken: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const token = state.token.length > 0 ? state.token : "";
  return {
    token,
    user: state.user
  };
}

const mapDispatchToProps = {
  saveToken,
  loadUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenPage);
