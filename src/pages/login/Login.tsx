import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Image } from "../../common/image/Image";

export const Login = () => {
  const navigate = useNavigate();
  const getToken = async () => {
    // const response = await getRequestToken();
    // console.log(response);
    navigate("/");
  };

  return (
    <article className="login">
      <Image src="TradeEITI.png"/>
      <br></br>
      <button onClick={getToken} id="loginButton">
        Login
      </button>
    </article>
  );
};
