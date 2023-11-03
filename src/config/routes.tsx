import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Offers } from "../pages/offers/Offers";

export const routes = [{ path: "/login", element: <Login /> }];

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/offers", element: <Offers /> },
];
