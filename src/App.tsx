import AppRouter from "./Router/AppRouter";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getFetchFolder } from "./store/folder-slice";

function App() {
  const dispatch = useAppDispatch();
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
