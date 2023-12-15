import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { ModalProvider } from "./Components/SignUpModal/Modal";
import { AuthProvider } from "./utils/Auth";

function App() {
  return (
    <>
      <ModalProvider>
        <AuthProvider>
          <Navbar />
          <div>
            <Outlet />
          </div>
          <Footer />
        </AuthProvider>
      </ModalProvider>
    </>
  );
}

export default App;
