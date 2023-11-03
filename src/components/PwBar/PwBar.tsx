import { Image } from "../../common/Image/Image";
import "./PwBar.scss";

export const PwBar = () => {
  return (
    <>
      <div className="pwBar">
        {/* <img src="/logoPW.png" alt="pwLogo"  height="90%"/> */}
        <Image src="logoPW.png"/>
        <h2>Politechnikum Warszawskie</h2>
        <img src="buildingPic" alt="pwBuilding" />
        <div className="lowerBar"></div>
      </div>
    </>
  );
};
