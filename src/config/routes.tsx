import { PrivateHome } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { PrivateOffers } from "../pages/offers/Offers";

export const routes = [{ path: "/login", element: <Login /> }];

export const privateRoutes = [
  { path: "/offers", element: <PrivateOffers /> },
  { path: "/", element: <PrivateHome /> },
  { path: "*", element: <PrivateHome /> },
];
