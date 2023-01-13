import { Route, Routes } from "react-router-dom";
import Members from "./pages/Members";
import UpdateMember from "./pages/UpdateMember";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/members/:id" element={<UpdateMember />} />
      </Routes>
    </div>
  );
}

export default App;
