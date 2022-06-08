import React from "react";

const NoteItem: React.FC = (props) => {
  return (
    <>
      <li>
        <img
          src="./img/default.ico"
          width={172}
          height={172}
          alt="Text document"
        />
      </li>
    </>
  );
};

export default NoteItem;
