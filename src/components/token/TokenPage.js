import React, { useState } from "react";
import { connect } from "react-redux";
import { saveToken, removeToken } from "../../redux/actions/tokenActions";
import { loadUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import TokenForm from "./TokenForm";
import { toast } from "react-toastify";

export function TokenPage({
  user,
  saveToken,
  removeToken,
  loadUser,
  history,
  ...props
}) {
  const [token, setToken] = useState(props.token);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setToken(value);
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveToken(token);
    loadUser()
      .then(() => {
        toast.success("App authorized.");
        history.push("/issues");
      })
      .catch(error => {
        setSaving(false);
        removeToken();
        setErrors({ onSave: error.message });
      });
  }

  function formIsValid() {
    const errors = {};

    if (!token) errors.token = "Personal access token is required.";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  return (
    <TokenForm
      token={token}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

TokenPage.propTypes = {
  token: PropTypes.string.isRequired,
  saveToken: PropTypes.func.isRequired,
  removeToken: PropTypes.func.isRequired,
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
  removeToken,
  loadUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenPage);
