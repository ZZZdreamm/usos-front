import { useNavigate } from "react-router-dom";
import { getRequestToken } from "../../apiFunctions/login";
import { logo } from "../../logo";

export const Home = () => {
  const navigate = useNavigate();
  const getToken = async () => {
    // const response = await getRequestToken();
    // console.log(response);
    navigate("/offers");
  };

  let logoComponent = logo("/TradeEITI.png");
  return (
    <main>
      {logoComponent}
      <br></br>
      <button onClick={getToken} id="loginButton">
        Login
      </button>
    </main>
  );
};
