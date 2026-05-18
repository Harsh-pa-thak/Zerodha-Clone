import "./App.css";
import Home from "./Home";
import AuthGuard from "./AuthGuard";
import { GeneralContextProvider } from "./GeneralContext";

function App() {
  return (
    <AuthGuard>
      <GeneralContextProvider>
        <Home />
      </GeneralContextProvider>
    </AuthGuard>
  );
}

export default App;
