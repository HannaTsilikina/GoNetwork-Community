import { Link } from "react-router-dom";
import "./../MainScreen.scss";
import "./MainProfessions.scss";
import data from "../../../../../data.json";
import randomProperties from "../../../../helpers/RandomPosition";

const arrayOfProfessions = data.directions.map((item) => item.name);
const arrayOfPosition = [
  "position-left-start",
  "position-left-end",
  "position-center",
  "position-right-end",
  "position-right-start",
];
const arrayOfColors = ["pink100", "pink200", "pink400", "pink500"];
const arrayOfSize = ["sizeXXS","sizeXS", "sizeS", "sizeM", "sizeL", "sizeXL"];

const MainProfessions = () => {
  return (
    <div className="mainscreen-main__items">
      {arrayOfProfessions.map((item, index) => {
        let position = randomProperties(arrayOfPosition);
        let color = randomProperties(arrayOfColors);
        let size = randomProperties(arrayOfSize);
        return (
          <Link className="mainscreen__professions" key={index}>
            <div
              className={`mainscreen__profession ${position} ${color} ${size}`}
            >
              {item}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default MainProfessions;
