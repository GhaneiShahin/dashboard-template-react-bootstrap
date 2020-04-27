import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="flexible-navbar bg-primary fixed-bottom">
        <p className="pb-2 mt-2 text-center text-light">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Amirreza Ghanei{" "}
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
