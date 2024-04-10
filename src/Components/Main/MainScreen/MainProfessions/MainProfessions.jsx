import { Link } from "react-router-dom";
import "./../MainScreen.scss";
import "./MainProfessions.scss";
import { randomIntFromInterval } from "../../../../helpers/commonFunctions";

const arrayOfItems = [
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
  "Аналитик",
];
const StylePosition = () => {
  const arraysOfPosition = [
    "position-left-start",
    "position-left-end",
    "position-center",
    "position-right-end",
    "position-right-start",
  ];

  const index = randomIntFromInterval(0, 4);

  return arraysOfPosition[index];
};
const ColorChange = () => {
  const arraysOfColors = ["pink100", "pink200", "pink400", "pink500"];

  const index = randomIntFromInterval(0, 3);

  return arraysOfColors[index];
};
const SizeChange = () => {
  const arraysOfSize = ["sizeXS", "sizeS", "sizeM", "sizeL", "sizeXL"];

  const index = randomIntFromInterval(0, 2);

  return arraysOfSize[index];
};

const MainProfessions = () => {
  return (
    <div className="mainscreen-main__items">
      {arrayOfItems.map((item, index) => {
        let position = StylePosition();
        let color = ColorChange();
        let size = SizeChange();
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
