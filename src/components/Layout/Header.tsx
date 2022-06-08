import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/constants";
import Input from "../UI/Input";
import classes from "./Header.module.css";

const Header: React.FC = (props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  return (
    <header className={classes.header}>
      <h1 className={classes.logo} onClick={() => history.push(HOME_ROUTE)}>
        Note Manager
      </h1>
      <form className={classes["form-search"]}>
        <Input
          ref={searchRef}
          label=""
          input={{
            id: "search",
            type: "textarea",
            placeholder: "Search",
          }}
        />
        <img src="./img/search.ico" width={36} height={36} alt="Search icon" />
      </form>
    </header>
  );
};

export default Header;
