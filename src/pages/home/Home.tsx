import { useNavigate } from "react-router-dom";
// import { getRequestToken } from "../../apiFunctions/login";
import {Image} from "../../common/Image/Image"
import { withPrivateRoute } from "../../common/WithPrivateRoute/WithPrivateRoute";

const Home = () => {
  const navigate = useNavigate();
  const getToken = async () => {
    // const response = await getRequestToken();
    // console.log(response);
    navigate("/offers");
  };

  return (
    <>
      <Image src="TradeEITI.png" alt="logo"/>
      <br></br>
      <button onClick={getToken} id="loginButton">
        Login
      </button>
    </>
  );
};

export const PrivateHome = withPrivateRoute(Home);
