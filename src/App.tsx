import AppRouter from "./Router/AppRouter";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getFetchFolder } from "./store/folder-slice";

function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    axios.get(`${API_URL}directories`).then((response) => {
      dispatch(folderActions.fetchFolders(response.data));
    });

    axios.get(`${API_URL}notices`).then((response) => {
      dispatch(notesActions.fetchNotes(response.data));
    })
  }, [dispatch]);
  
  const folderData = useAppSelector((state) => state.folderItem);
  console.log(folderData);
  useEffect(() => {
    dispatch(getFetchFolder);
    console.log("run");
  }, [dispatch]);

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
