import React from "react";
import classes from "./SubFoldersItem.module.css";

const SubFolderItem: React.FC = (props) => {
  const openedFolderImg = (
    <img
      src="./img/opened-folder.ico"
      width={74}
      height={74}
      alt="Opened folder"
    />
  );
  const containedFolderImg = (
    <img
      src="./img/contained-folder.ico"
      width={74}
      height={74}
      alt="Contained folder"
    />
  );
  const closedFolderImg = (
    <img
      src="./img/closed-folder.ico"
      width={74}
      height={74}
      alt="Contained folder"
    />
  );

  return (
    <div className={classes.item}>
      {closedFolderImg}
      {openedFolderImg}
      {containedFolderImg}
      <span></span>
    </div>
  );
};

export default SubFolderItem;
