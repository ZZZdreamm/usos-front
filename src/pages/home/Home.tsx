import { useNavigate } from "react-router-dom";
// import { getRequestToken } from "../../apiFunctions/login";
import { logo } from "../../logo";
import { withPrivateRoute } from "../../common/WithPrivateRoute/WithPrivateRoute";

const Home = () => {
  const navigate = useNavigate();
  const getToken = async () => {
    // const response = await getRequestToken();
    // console.log(response);
    navigate("/offers");
  };

  let logoComponent = logo("/TradeEITI.png");
  return (
    <>
      {logoComponent}
      <br></br>
      <button onClick={getToken} id="loginButton">
        Login
      </button>
    </>
  );
};

export const PrivateHome = withPrivateRoute(Home);
