import "./App.css";
import { PwBar } from "./components/PwBar/PwBar";
import { RoutesProvider } from "./providers/RoutesProvider";

function App() {
  return (
    <>
      <PwBar />
      <RoutesProvider></RoutesProvider>
    </>
  );
}

export default App;
