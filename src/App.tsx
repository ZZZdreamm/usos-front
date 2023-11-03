import "./App.css";
import Authorized from "./common/Authorized/Authorized";
import { PwBar } from "./components/PwBar/PwBar";
import { RoutesProvider } from "./providers/RoutesProvider";

function App() {
  return (
    <>
      <Authorized isAuthorized={<PwBar />} />
      <main>
        <RoutesProvider></RoutesProvider>
      </main>
    </>
  );
}

export default App;
