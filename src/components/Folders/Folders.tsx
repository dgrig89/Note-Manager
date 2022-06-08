import React from "react";
import { useAppSelector } from "../../hooks/redux";
import FoldersItem from "./FoldersItem";

const Folders: React.FC = (props) => {
  const folderData = useAppSelector((state) => state.folderItem);
  console.log(folderData);
  return (
    <ul>
      <FoldersItem />
    </ul>
  );
};

export default Folders;
