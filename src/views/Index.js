import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/CustomNavbar.js";
import IndexHeader from "components/Headers/CustomHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar/>
      <div className="wrapper">
        <IndexHeader />
        <TransparentFooter />
      </div>
    </>
  );
}

export default Index;
