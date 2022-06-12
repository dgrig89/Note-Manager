import AppRouter from "./Router/AppRouter";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
