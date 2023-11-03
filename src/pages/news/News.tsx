import { withPrivateRoute } from "../../common/WithPrivateRoute/WithPrivateRoute";

export const News = () => {
  return (
    <div>
      <h1>News</h1>
    </div>
  );
};

export const PrivateNews = withPrivateRoute(News);
