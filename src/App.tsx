import "./App.css";
import Authorized from "./common/Authorized/Authorized";
import { PwBar } from "./components/PwBar/PwBar";
import { TopBar } from "./components/TopBar/TopBar";
import { AuthProvider } from "./providers/AuthProvider";
import { RoutesProvider } from "./providers/RoutesProvider";

function App() {
  return (
    <>
      <Authorized isAuthorized={<TopBar />} />
      <Authorized isAuthorized={<PwBar />} />
      <main>
        <AuthProvider>
          <RoutesProvider></RoutesProvider>
        </AuthProvider>
      </main>
    </>
  );
}

export default App;
