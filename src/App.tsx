import "./App.css";
import { AppLayout } from "./common/AppLayout/AppLayout";
import Authorized from "./common/Authorized/Authorized";
import { PwBar } from "./components/PwBar/PwBar";
import { TopBar } from "./components/TopBar/TopBar";
import { Providers } from "./providers/Providers";

function App() {
  return (
    <AppLayout>
      <Authorized isAuthorized={<TopBar />} />
      <Authorized isAuthorized={<PwBar />} />
      <Providers />
    </AppLayout>
  );
}

export default App;
