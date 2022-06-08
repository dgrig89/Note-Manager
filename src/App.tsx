import AppRouter from "./Router/AppRouter";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { fetchFolderData, sendFolderData } from "./store/folder-actions";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

function App() {
  const dispatch = useAppDispatch();
  const folderData = useAppSelector((state) => state.folderItem);

  useEffect(() => {
    dispatch(fetchFolderData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendFolderData(folderData));
  }, [dispatch, folderData]);

  return (
    <>
      <Layout>
        <AppRouter />
        {JSON.stringify(folderData)}
      </Layout>
    </>
  );
}

export default App;
