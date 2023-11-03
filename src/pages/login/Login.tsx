import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Image } from "../../common/Image/Image";

export const Login = () => {
  const navigate = useNavigate();
  const getToken = async () => {
    // const response = await getRequestToken();
    // console.log(response);
    navigate("/");
  };

  return (
    <>
      <Image src="TradeEITI.png"/>
      <br></br>
      <button onClick={getToken} id="loginButton">
        Login
      </button>
    </>
  );
};
