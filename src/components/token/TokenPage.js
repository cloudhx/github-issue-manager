import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveToken } from "../../redux/actions/tokenActions";
import PropTypes from "prop-types";
import TokenForm from "./TokenForm";

function TokenPage({ saveToken, history, ...props }) {
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
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const token = state.token.length > 0 ? state.token : "";
  return {
    token
  };
}

const mapDispatchToProps = {
  saveToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenPage);
