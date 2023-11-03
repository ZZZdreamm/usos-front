import { withPrivateRoute } from "../../common/WithPrivateRoute/WithPrivateRoute";

export const News = () => {
  return (
    <div>
      <h1>News</h1>
      {/* <video src="https://www.youtube.com/watch?v=PjZi1zlxXRA" controls></video> */}
      
    </div>
  );
};

export const PrivateNews = withPrivateRoute(News);
