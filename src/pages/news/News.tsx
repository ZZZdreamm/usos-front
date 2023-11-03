import { withPrivateRoute } from "../../common/WithPrivateRoute/WithPrivateRoute";

import { NewsBox } from "../../components/NewsBox/NewsBox";

export const News = () => {
  return (
    <div>
      <h1>News</h1>
      <NewsBox />

    </div>
  );
};

export const PrivateNews = withPrivateRoute(News);
