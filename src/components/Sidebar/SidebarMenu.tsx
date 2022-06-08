import React from "react";
import { useHistory } from "react-router-dom";
import { CREATE_FOLDER_ROUTE, CREATE_ROUTE } from "../../utils/constants";
import classes from "./SidebarMenu.module.css";

const SidebarMenu: React.FC = (props) => {
  const history = useHistory();
  return (
    <div className={classes["sidebar-menu"]}>
      <ul>
        <li
          className={classes["sidebar-menu-item"]}
          onClick={() => history.push(CREATE_FOLDER_ROUTE)}
        >
          <img
            src="./img/closed-folder.ico"
            width={36}
            height={36}
            alt="Add folder"
          />
          <span>Add folder</span>
        </li>
        <li
          onClick={() => history.push(CREATE_ROUTE)}
          className={classes["sidebar-menu-item"]}
        >
          <img src="./img/add.ico" width={36} height={36} alt="Edit notes" />
          <span>Add/Change</span>
        </li>
        <li className={classes["sidebar-menu-item"]}>
          <img src="./img/remove.ico" width={36} height={36} alt="Remove" />
          <span>Remove</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
