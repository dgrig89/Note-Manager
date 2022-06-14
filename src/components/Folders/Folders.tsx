import axios from "axios";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { folderActions } from "../../store/folder-slice";
import { API_URL } from "../../utils/constants";
import FoldersItem from "./FoldersItem";

const Folders: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const folderData = useAppSelector((state) => state.folderItem);
  useEffect(() => {
    const fetchFolder = async () => {
      await axios
        .get(`${API_URL}/directories`)
        .then((res) => {
          dispatch(folderActions.getFolderData(res.data));
        })
        .catch((err) => {
          throw err;
        });
    };
    try {
      setTimeout(() => {
        fetchFolder();
      }, 500);
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  console.log(folderData);
  return (
    <ul>
      {folderData.map((item) => (
        <FoldersItem key={item.id} item={item} level={0} />
      ))}
    </ul>
  );
};

export default Folders;
