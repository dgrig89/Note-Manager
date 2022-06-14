import React from "react";
import { Item } from "./FoldersItem";

import classes from "./SubFoldersItem.module.css";

export type SubfolderType = {
  level: number;
  selected: boolean;
  item: Item;
  onToggle: () => void;
};

const SubFolderItem: React.FC<SubfolderType> = (props) => {
  const openedFolderImg = (
    <img
      src="./img/opened-folder.ico"
      width={74}
      height={74}
      alt="Opened folder"
      onClick={props.onToggle}
    />
  );
  const containedFolderImg = (
    <img
      src="./img/contained-folder.ico"
      width={74}
      height={74}
      alt="Contained folder"
      onClick={props.onToggle}
    />
  );
  const closedFolderImg = (
    <img
      src="./img/contained-folder.ico"
      width={74}
      height={74}
      alt="Contained folder"
      onClick={props.onToggle}
    />
  );

  return (
    <div
      style={{ paddingLeft: `${props.level * 2.4}rem` }}
      className={props.item.id !== 1 ? classes.item : classes.hide}
    >
      {!props.selected && props.item.parentId !== undefined && closedFolderImg}
      {props.item.parentId && openedFolderImg}
      {props.selected &&
        props.item.parentId !== undefined &&
        containedFolderImg}
      <span>{props.item.name}</span>
    </div>
  );
};

export default SubFolderItem;
