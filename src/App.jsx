import { Route, Routes } from "react-router-dom";
import { Nav } from "./layout/nav/nav";
import NotFound from "./pages/notFound";
import "./output.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
