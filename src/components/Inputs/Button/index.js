import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  .btn {
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 500;
  }
  .btn-warning {
    background-color: #fede3b;
  }
`;

function Index({ children, ...props }) {
  return (
    <ButtonWrapper>
      <button type="submit" {...props}>
        {children}
      </button>
    </ButtonWrapper>
  );
}

export default Index;
