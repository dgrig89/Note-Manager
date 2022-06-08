import { AppDispatch } from ".";
import { FoldersType } from "../types/FolderItemsType";

export const fetchFolderData = () => async (dispatch: AppDispatch) => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/directories");
    const data = response.json();
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return data;
  };

  try {
    await fetchData();
  } catch (error) {
    console.log(error);
  }
};

export const sendFolderData =
  (folder: FoldersType) => async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:3000/directories", {
        method: "POST",
        body: JSON.stringify({
          id: folder.id,
          parentId: folder.parentId,
          name: folder.name,
          children: folder.children,
          hasChild: folder.hasChild,
        }),
        headers: { "Content-Type": "aplication/json" },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      return null;
    };
    try {
      sendRequest();
    } catch (e) {
      console.log(e);
    }
  };
