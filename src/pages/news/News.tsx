import { withPrivateRoute } from "../../common/withPrivateRoute/WithPrivateRoute";

const News = () => {
  return (
    <div>
      <h1>News</h1>
      {/* <video src="https://www.youtube.com/watch?v=PjZi1zlxXRA" controls></video> */}
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/PjZi1zlxXRA`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export const PrivateNews = withPrivateRoute(News);
