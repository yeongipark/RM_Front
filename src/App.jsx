import { Route, Routes } from "react-router-dom";
import { Nav } from "./layout/nav/nav";
import NotFound from "./pages/notFound";
import { LoginLoading } from "./pages/loading";
import { Home } from "./components/home/Home";
import "./output.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/oauth/redirect"
          element={
            <LoginLoading text={"로그인 진행중입니다. 잠시만 기다려주세요"} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
