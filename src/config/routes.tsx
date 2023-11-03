import { PrivateHome } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { PrivateMyOffers } from "../pages/myOffers/MyOffers";
import { PrivateNews } from "../pages/news/News";
import { PrivateOffers } from "../pages/offers/Offers";

export const routes = [{ path: "/login", element: <Login /> }];

export const privateRoutes = [
  { path: "/offers", element: <PrivateOffers /> },
  { path: "/myOffers", element: <PrivateMyOffers /> },
  { path: "/news", element: <PrivateNews /> },
  { path: "/", element: <PrivateHome /> },
  { path: "*", element: <PrivateHome /> },
];
