import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { folderActions } from "../../store/folder-slice";
import { IFolder } from "../../types/FolderItemsType";
import Card from "../UI/Card";
import classes from "./AddFolderForm.module.css";

const AddFolderForm: React.FC<IFolder> = (props) => {
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent) => {
    event!.preventDefault();

    dispatch(folderActions.addFolder(name));
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="folder">Add folder</label>
          <input
            type="text"
            id="folder"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button className="btn">Add Folder</button>
        </div>
      </form>
    </Card>
  );
};
export default AddFolderForm;
