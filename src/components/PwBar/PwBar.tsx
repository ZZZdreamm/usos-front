import { Image } from "../../common/Image/Image";
import "./PwBar.scss";

export const PwBar = () => {
  return (
    <>
      <div className="pwBar">

      <Image src="logoPW.png" alt="pwLogo" />
      <h2>Politechnikum Warszawskie</h2>
      <Image src="TradeEITI.png" alt="pwBuilding"/>

      <div className="lowerBar"></div>
    </div>

    </>
  );
};
