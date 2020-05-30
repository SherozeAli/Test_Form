import React from "react";
import { Batches, Navbar } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Drawer = styled.div`
  position: fixed;
  background-color: #298565;
  width: 250px;
  max-width: 250px;
  height: 100%;
  .nav {
    .nav-link {
      color: #fff;
    }
  }
  div {
    line-height: 18px;
  }
  span {
    font-size: 13px;
    letter-spacing: 0.8px;
  }
  @media (max-width: 980px) {
    display: none;
  }
  @media (max-width: 1195px) {
    /* display: none; */
    max-width: 200px;
  }
`;

const DrawerHeader = styled.li`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15px;
  display: flex;
  align-items: center;
  img {
    border: 2px solid #fff;
    border-radius: 5px;
  }
`;

const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  color: #298565;
  z-index: 1;
  padding: 8px;
  border-bottom: 1px solid #f2f2f2;
`;

const NavLink = styled.li`
  padding: 0.5rem 1rem;
  font-size: 18px;
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

function Index() {
  return (
    <React.Fragment>
      <NavBar>
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
          <Navbar />
        </div>
      </NavBar>
      <div class="container-fluid px-0 h-100">
        <div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
          <div class="col-lg-2 p-0 vh-100 h-100 text-white navbar-collapse collapse d-none d-lg-flex">
            <Drawer>
              <ul class="nav flex-column flex-nowrap text-truncate">
                <DrawerHeader>
                  <img
                    src={require("../../assets/images/user-profile.jpg")}
                    width={45}
                    height={45}
                  />
                  <div className="pl-3 d-flex flex-column">
                    <span>John Smith</span>
                    <span>@john_smith</span>
                  </div>
                </DrawerHeader>
                <li class="nav-item py-1 mt-2">
                  <NavLink>
                    <FontAwesomeIcon icon={faLayerGroup} />
                    <span className="ml-3">Batches</span>
                  </NavLink>
                </li>
                <li class="nav-item py-1">
                  <NavLink>
                    <FontAwesomeIcon icon={faInbox} />
                    <span className="ml-3">Inbox</span>
                  </NavLink>
                </li>
                <li class="nav-item py-1">
                  <NavLink>
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="ml-3">Calender</span>
                  </NavLink>
                </li>
                <li class="nav-item py-1">
                  <NavLink>
                    <FontAwesomeIcon icon={faPhoneSquareAlt} />
                    <span className="ml-3">Contacts</span>
                  </NavLink>
                </li>
                <li class="nav-item py-1">
                  <NavLink>
                    <FontAwesomeIcon icon={faTasks} />
                    <span className="ml-3">Tasks</span>
                  </NavLink>
                </li>
                <li class="nav-item py-1">
                  <NavLink>
                    <FontAwesomeIcon icon={faFile} />
                    <span className="ml-3">Docs</span>
                  </NavLink>
                </li>
                <li class="nav-item py-1">
                  <NavLink>
                    <FontAwesomeIcon icon={faYinYang} />
                    <span className="ml-3">Browsers</span>
                  </NavLink>
                </li>
                <li class="nav-item py-1">
                  <NavLink>
                    <FontAwesomeIcon icon={faCog} />
                    <span className="ml-3">Settings</span>
                  </NavLink>
                </li>
              </ul>
            </Drawer>
          </div>
          <div className="col-lg-10 col-md-12 p-0 px-lg-5">
            <Batches />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
