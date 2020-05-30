import React from "react";
import Tab from "../Tab";
import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 350;
`;

const Breadcrumb = styled.div`
  .breadcrumb {
    background-color: transparent;
    padding-left: 0;
    margin: 0;
  }
  .breadcrumb-item {
    font-size: 14px;
  }
  .breadcrumb-item > a {
    color: #6c757d;
  }
`;

function Index() {
  return (
    <div className="py-4 px-4">
      <Heading>My Batches</Heading>
      <nav aria-label="breadcrumb">
        <Breadcrumb>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">HOME</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              MANAGE BATCHES
            </li>
          </ol>
        </Breadcrumb>
      </nav>
      <Tab />
    </div>
  );
}

export default Index;
