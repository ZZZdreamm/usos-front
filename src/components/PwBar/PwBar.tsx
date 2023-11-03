import { Image } from "../../common/Image/Image";
import "./PwBar.css";

export const PwBar = () => {
  return (
    <>
      <div className="pwBar">
        {/* <img src="/logoPW.png" alt="pwLogo"  height="90%"/> */}
        <Image src="logoPW.png"/>
        <h2>Politechnika Warszawska</h2>
        <img src="buildingPic" alt="pwBuilding" />
        <div className="lowerBar"></div>
      </div>
    </>
  );
};
