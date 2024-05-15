import { NavLink } from "react-router-dom";
import "../../../Pages/Main/MainScreen.scss";
import "./MainDepartments.scss";
import randomProperties from "../../../helpers/RandomPosition";
import { randomIntFromInterval } from "../../../helpers/commonFunctions";

const arrayOfPosition = [
  "position-left-start",
  "position-left-end",
  "position-center",
  "position-right-end",
  "position-right-start",
];
const arrayOfColors = ["violet300", "violet400", "violet500"];

const MainDepartments = ({ arrayOfCompanies }) => {
  return (
    <div className="mainscreen-main__items">
      {arrayOfCompanies.map((item, index) => {
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
        if (item.length > 5) {
          size = "sizeXS";
        }
        if (item.length > 7) {
          size = "sizeS";
        }
        if (item.length > 10) {
          size = "sizeM";
        }
        if (item.length > 14) {
          size = "sizeL";
        }
        if (item.length > 18) {
          size = "sizeXL";
        }
        return (
          <NavLink className="mainscreen__company" key={index}>
            <div
              className={`mainscreen__department  ${position} ${color} ${size} ${display}`}
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
export default MainDepartments;
