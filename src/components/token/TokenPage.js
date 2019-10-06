import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveToken } from "../../redux/actions/tokenActions";
import { loadUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import TokenForm from "./TokenForm";
import { toast } from "react-toastify";

function TokenPage({ user, saveToken, loadUser, history, ...props }) {
  const [token, setToken] = useState(props.token);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {}, []);

  function handleChange(event) {
    const { value } = event.target;
    setToken(value);
  }

  function handleSave(event) {
    event.preventDefault();
    setSaving(true);
    saveToken(token);
    loadUser()
      .then(() => {
        toast.success("App authorized.");
        history.push("/issues");
      })
      .catch(error => {
        alert("Loading user failed" + error);
      });
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
