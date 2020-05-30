import React, { Children } from "react";
import { Field } from "formik";
import styled from "styled-components";

const Label = styled.label`
  font-size: 13px;
`;

function Index({
  label,
  isRequired,
  isValid,
  errorMessage,
  children,
  ...props
}) {
  return (
    <div class="form-group">
      <Label>
        {label} <span className="text-danger">{isRequired && "*"}</span>
      </Label>
      <Field
        className={`form-control ${!isValid ? "" : "is-invalid"}`}
        component="select"
        {...props}
      >
        {children}
      </Field>
      <div class="invalid-feedback">{errorMessage}</div>
    </div>
  );
}

export default Index;
