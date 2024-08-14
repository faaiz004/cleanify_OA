import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { lazy, Suspense } from "react";

// importing the layouts
import Navbar from "../layout/Navbar/Index";

// Lazy load the components
const Home = lazy(() => import("../pages/Home/Index"));

const NavbarLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
