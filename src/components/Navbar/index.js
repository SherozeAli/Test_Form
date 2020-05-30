import React from "react";

function Index() {
  return (
    <React.Fragment>
      <div class="col-3 px-0 navbar-collapse collapse d-flex">
        <div class="navbar-brand d-flex align-items-center px-2">
          <img
            src={require("../../assets/images/logo.png")}
            width={30}
            height={30}
          />
          <span className="font-weight-bold ml-2">BatchCrack</span>
        </div>
      </div>
      <div class="col px-3 px-md-0">
        <a
          data-toggle="collapse"
          href="#"
          data-target=".collapse"
          role="button"
          class="p-1"
        >
          <i class="fa fa-bars fa-lg"></i>
        </a>
      </div>
    </React.Fragment>
  );
}

export default Index;
