import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Nav } from "./layout/nav/nav";
import "./output.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
