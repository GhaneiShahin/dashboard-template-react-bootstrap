import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup } from "react-bootstrap";



const SideNavigation = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <ListGroup className="list-group-flush">
        <NavLink to="/dashboard" activeClassName="activeClass">
          <ListGroup.Item>
            Dashboard
          </ListGroup.Item>
        </NavLink>
        <NavLink to="/profile" activeClassName="activeClass">
          <ListGroup.Item>
            Profile
          </ListGroup.Item>
        </NavLink>
        <NavLink to="/others" activeClassName="activeClass">
          <ListGroup.Item>
            Others
          </ListGroup.Item>
        </NavLink>
      </ListGroup>
    </div>
  );
};

export default SideNavigation;
