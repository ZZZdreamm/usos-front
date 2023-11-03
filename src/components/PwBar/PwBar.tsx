import { Image } from "../../common/Image/Image";
import "./PwBar.scss";

export const PwBar = () => {
  return (
    <>
      <div className="pwBar">

      <Image src="logoPW.png" alt="pwLogo" />
      <h4>Politechnikum Warszawskie</h4>
      <Image src="TradeEITI.png" alt="pwBuilding"/>

    </div>

    </>
  );
};
