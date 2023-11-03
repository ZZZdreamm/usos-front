import { withPrivateRoute } from "../../common/WithPrivateRoute/WithPrivateRoute";

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
    </div>
  );
}

export const PrivateCourses = withPrivateRoute(Courses);
