import React, { Fragment } from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Fragment>
      <h3 className="footer">
        Created By : Sonam Dangi {year} &copy; all copy-rights reserved
      </h3>
    </Fragment>
  );
};

export default Footer;
