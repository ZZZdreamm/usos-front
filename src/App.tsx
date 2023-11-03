import "./App.css";
import { AppLayout } from "./common/AppLayout/AppLayout";
import Authorized from "./common/Authorized/Authorized";
import { Footer } from "./components/Footer/Footer";
import { PwBar } from "./components/PwBar/PwBar";
import { TopBar } from "./components/TopBar/TopBar";
import { Providers } from "./providers/Providers";
import { RoutesProvider } from "./providers/RoutesProvider";

function App() {
  return (
    <AppLayout>
      <Providers>
        <Authorized isAuthorized={<TopBar />} />
        <Authorized isAuthorized={<PwBar />} />
        <RoutesProvider />
        <Authorized isAuthorized={<Footer />} />
      </Providers>
    </AppLayout>
  );
}

export default App;
