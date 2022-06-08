import React from "react";
import NoteItem from "./NoteItem";
import classes from "./AllNotes.module.css";
import Card from "../UI/Card";
const AllNotes = () => {
  return (
    <Card>
      <ul className={classes.item}>
        <NoteItem />
      </ul>
    </Card>
  );
};

export default AllNotes;
