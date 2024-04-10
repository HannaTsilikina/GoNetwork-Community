import { Link } from "react-router-dom";

import "./../MainScreen.scss";

import "./MainDepartments.scss";
import { randomIntFromInterval } from "../../../../helpers/commonFunctions";

const arrayOfItems = [
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
  "Aviasystem",
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
  const arraysOfColors = ["violet300", "violet400", "violet500"];

  const index = randomIntFromInterval(0, 2);

  return arraysOfColors[index];
};
const SizeChange = () => {
  const arraysOfSize = ["sizeXS", "sizeS", "sizeM", "sizeL", "sizeXL"];

  const index = randomIntFromInterval(0, 2);

  return arraysOfSize[index];
};

const MainDepartments = () => {
  return (
    <div className="mainscreen-main__items">
      {arrayOfItems.map((item, index) => {
        let position = StylePosition();
        let color = ColorChange();
        let size = SizeChange();
        return (
          <Link className="mainscreen__company" key={index}>
            <div
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
