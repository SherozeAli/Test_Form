import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const Label = styled.label`
  font-size: 13px;
`;

function Index({ label, isRequired, isValid, errorMessage, ...props }) {
  return (
    <div class="form-group">
      <Label>
        {label} <span className="text-danger">{isRequired && "*"}</span>
      </Label>
      <Field
        type="date"
        className={`form-control ${!isValid ? "" : "is-invalid"}`}
        {...props}
      />
      <div class="invalid-feedback">{errorMessage}</div>
    </div>
  );
}

export default Index;
