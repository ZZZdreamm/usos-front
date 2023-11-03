import { withPrivateRoute } from "../../common/WithPrivateRoute/WithPrivateRoute";

const Offers = () => {
  return (
    <div>
      <h1>Offers</h1>
    </div>
  );
};

export const PrivateOffers = withPrivateRoute(Offers);
