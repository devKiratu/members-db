import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Members from "./pages/Members";
import UpdateMember from "./pages/UpdateMember";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/members/:id" element={<UpdateMember />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
