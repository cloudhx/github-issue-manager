import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const TokenForm = ({
  token,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>Connect to GitHub</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="token"
        label="token"
        value={token}
        onChange={onChange}
        error={errors.title}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Validating..." : "Save"}
      </button>
    </form>
  );
};

TokenForm.propTypes = {
  token: PropTypes.string.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default TokenForm;
