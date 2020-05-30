import React from "react";
import { BatchDetails } from "../index";
import styled from "styled-components";

const Tab = styled.div`
  .nav {
    border-bottom: none;
    margin-bottom: 1rem;
  }
  .nav-item {
    padding: 0 16px 0 0;
  }
  .nav-link {
    color: #000;
    padding: 5px 0;
  }
  .nav-link:hover,
  .nav-link:focus {
    border: none;
  }
  .nav-item > .active {
    font-weight: bold;
    border-bottom: 3px solid;
    border-color: transparent transparent #fede3b;
    background-color: transparent;
  }
`;

function Index() {
  return (
    <Tab>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            data-toggle="tab"
            href="#"
            role="tab"
            aria-selected="true"
          >
            Batch Details
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            data-toggle="tab"
            href="#"
            role="tab"
            aria-selected="false"
          >
            Live Sessions
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            data-toggle="tab"
            href="#"
            role="tab"
            aria-selected="false"
          >
            Set Timings
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            data-toggle="tab"
            href="#"
            role="tab"
            aria-selected="false"
          >
            Topics
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <BatchDetails />
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          ...
        </div>
      </div>
    </Tab>
  );
}

export default Index;
