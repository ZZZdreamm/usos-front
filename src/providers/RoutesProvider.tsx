import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "../config/routes";

export const RoutesProvider = () => {
  return (
    <HashRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </HashRouter>
  );
};
