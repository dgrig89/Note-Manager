import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addFolder } from "../../store/folder-slice";
import Card from "../UI/Card";
import classes from "./AddFolderForm.module.css";

const AddFolderForm: React.FC = (props) => {
  const addFolderRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { parentId } = useAppSelector((state) => state.folderItem);

  const submitHandler = (event: React.FormEvent) => {
    event!.preventDefault();
    const enteredFolderName = addFolderRef.current!.value;
    dispatch(
      addFolder({
        name: enteredFolderName,
        parentId,
      })
    );
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="folder">Add folder</label>
          <input type="text" id="folder" ref={addFolderRef} />
        </div>
        <div className="btn-group">
          <button className="btn">Add Folder</button>
        </div>
      </form>
    </Card>
  );
};
export default AddFolderForm;
