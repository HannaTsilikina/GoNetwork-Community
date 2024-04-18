import { Link } from "react-router-dom";
import "./../MainScreen.scss";
import "./MainDepartments.scss";
import data from "../../../../../data.json";
import randomProperties from "../../../../helpers/RandomPosition";

const arrayOfCompanies = data.companies.map((item) => item.name);
const arrayOfPosition = [
  "position-left-start",
  "position-left-end",
  "position-center",
  "position-right-end",
  "position-right-start",
];
const arrayOfColors = ["violet300", "violet400", "violet500"];
const arrayOfSize = ["sizeXXS", "sizeXS", "sizeS", "sizeM", "sizeL", "sizeXL"];

const MainDepartments = () => {
  return (
    <div className="mainscreen-main__items">
      {arrayOfCompanies.map((item, index) => {
        let position = randomProperties(arrayOfPosition);
        let color = randomProperties(arrayOfColors);
        let size = randomProperties(arrayOfSize);
        let marginTop = `{randomIntFromInterval(0,20)}px`;
        let marginBottom = `{randomIntFromInterval(0,20)}px`;
        let marginLeft = `{randomIntFromInterval(0,20)}px`;
        let marginRight = `{randomIntFromInterval(0,20)}px`;

        return (
          <Link className="mainscreen__company" key={index}>
            <div
              style={{
                marginTop: `${marginTop}`,
                marginBottom: `${marginBottom}`,
                marginLeft: `${marginLeft}`,
                marginRight: `${marginRight}`,
              }}
              className={`mainscreen__department ${position} ${color} ${size}`}
            >
              {item}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default MainDepartments;
