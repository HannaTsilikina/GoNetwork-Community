import { NavLink } from "react-router-dom";
import "../../../Pages/Main/MainScreen.scss";
import "./MainProfessions.scss";
import randomProperties from "../../../helpers/RandomPosition";
import { randomIntFromInterval } from "../../../helpers/commonFunctions";

const arrayOfPosition = [
  "position-left-start",
  "position-left-end",
  "position-center",
  "position-right-end",
  "position-right-start",
];

const arrayOfColors = ["pink100", "pink200", "pink400", "pink500"];

const MainProfessions = ({ arrayOfProfessions, handleDirectionClick }) => {
  return (
    <div className="mainscreen-main__items">
      {arrayOfProfessions.map((professionId, index) => {
        let position = randomProperties(arrayOfPosition);
        let color = randomProperties(arrayOfColors);
        let display = "";
        let size;
        let marginTop = `${randomIntFromInterval(0, 20)}px`;
        let marginBottom = `${randomIntFromInterval(0, 20)}px`;
        let marginLeft = `${randomIntFromInterval(0, 10)}px`;
        let marginRight = `${randomIntFromInterval(0, 10)}px`;

        if (professionId.length === 0) {
          display = "display";
          size = "sizeNone";
        }
        if (professionId.length > 2) {
          size = "sizeXXS";
        }
        if (professionId.length > 7) {
          size = "sizeXS";
        }
        if (professionId.length > 9) {
          size = "sizeS";
        }
        if (professionId.length > 11) {
          size = "sizeM";
        }
        if (professionId.length > 12) {
          size = "sizeL";
        }
        if (professionId.length > 18) {
          size = "sizeXL";
        }

        return (
          <NavLink
            className="mainscreen__professions"
            to={`/professions/${professionId}`}
            key={index}
          >
            <div
              className={`mainscreen__profession ${position} ${color} ${size}`}
              style={{
                marginTop: marginTop,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginRight: marginRight,
              }}
              onClick={() => handleDirectionClick(professionId)}
            >
              {professionId}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default MainProfessions;
