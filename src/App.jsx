import { Route, Routes } from "react-router-dom";
import { Nav } from "./layout/nav/nav";
import NotFound from "./pages/notFound";
import { LoginLoading } from "./pages/loginLoading";
import { Home } from "./components/home/home";
import "./output.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/oauth/redirect" element={<LoginLoading />}></Route>
      </Routes>
    </>
  );
}

export default App;
