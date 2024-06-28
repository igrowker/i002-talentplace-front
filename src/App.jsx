import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Navbar, Footer } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <AppRouter />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
