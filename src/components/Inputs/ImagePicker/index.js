import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

const ImagePicker = styled.label`
  padding: 70px;
  background: #fff;
  display: table;
  color: #fff;
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
  border: ${(props) => {
    if (props.error) {
      return "1px solid red";
    } else {
      return "1px solid #ced4da";
    }
  }};
  border-radius: 0.25rem;
  input[type="file"] {
    display: none;
  }
`;

const FileUpload = ({ ...props }) => (
  <input type="file" className="form-control" {...props} />
);

function Index({ label, isValid, imageURL, ...props }) {
  return (
    <div class="form-group text-md-center">
      <ImagePicker error={isValid} imageURL={imageURL}>
        <Field component={FileUpload} className="form-control" {...props} />
      </ImagePicker>
      <Label>{label}</Label>
      <div class="invalid-feedback">errorMessage</div>
    </div>
  );
}

export default Index;
