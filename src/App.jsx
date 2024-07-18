import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./layout/nav/nav";
import NotFound from "./pages/notFound";
import { LoginLoading } from "./pages/loading";
import { Home } from "./pages/home";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./output.css";
import { History } from "./components/history/History";
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300} key={location.key}>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/history" element={<History />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route
              path="/oauth/redirect"
              element={
                <LoginLoading
                  text={"로그인 진행중입니다. 잠시만 기다려주세요"}
                />
              }
            ></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
