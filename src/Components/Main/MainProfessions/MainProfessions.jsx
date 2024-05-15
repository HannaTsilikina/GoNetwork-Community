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

const MainProfessions = ({ arrayOfProfessions }) => {
  return (
    <div className="mainscreen-main__items">
      {arrayOfProfessions.map((item, index) => {
        let position = randomProperties(arrayOfPosition);
        let color = randomProperties(arrayOfColors);
        let display = "";
        let size;
        let marginTop = `${randomIntFromInterval(0, 20)}px`;
        let marginBottom = `${randomIntFromInterval(0, 20)}px`;
        let marginLeft = `${randomIntFromInterval(0, 10)}px`;
        let marginRight = `${randomIntFromInterval(0, 10)}px`;
        if (item.length === 0) {
          display = "display";
          size = "sizeNone";
        }
        if (item.length > 2) {
          size = "sizeXXS";
        }
        if (item.length > 7) {
          size = "sizeXS";
        }
        if (item.length > 9) {
          size = "sizeS";
        }
        if (item.length > 11) {
          size = "sizeM";
        }
        if (item.length > 12) {
          size = "sizeL";
        }
        if (item.length > 18) {
          size = "sizeXL";
        }
        return (
          <NavLink className="mainscreen__professions" key={index}>
            <div
              className={`mainscreen__profession ${position} ${color} ${size}`}
              style={{
                marginTop: `${marginTop}`,
                marginBottom: `${marginBottom}`,
                marginLeft: `${marginLeft}`,
                marginRight: `${marginRight}`,
              }}
            >
              {item}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
export default MainProfessions;
