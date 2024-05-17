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

const MainDepartments = ({ arrayOfCompanies, handleCompanyClick }) => {
  return (
    <div className="mainscreen-main__items">
      {arrayOfCompanies.map((companyId, index) => {
        let position = randomProperties(arrayOfPosition);
        let color = randomProperties(arrayOfColors);
        let display = "";
        let size;
        let marginTop = `${randomIntFromInterval(0, 20)}px`;
        let marginBottom = `${randomIntFromInterval(0, 20)}px`;
        let marginLeft = `${randomIntFromInterval(0, 10)}px`;
        let marginRight = `${randomIntFromInterval(0, 10)}px`;

        if (companyId.length === 0) {
          display = "display";
          size = "sizeNone";
        }
        if (companyId.length > 2) {
          size = "sizeXXS";
        }
        if (companyId.length > 5) {
          size = "sizeXS";
        }
        if (companyId.length > 7) {
          size = "sizeS";
        }
        if (companyId.length > 10) {
          size = "sizeM";
        }
        if (companyId.length > 14) {
          size = "sizeL";
        }
        if (companyId.length > 18) {
          size = "sizeXL";
        }

        return (
          <NavLink 
  key={index}
  onClick={() => handleCompanyClick(companyId.split('/')[0])}
  className={`mainscreen__department  ${position} ${color} ${size} ${display}`}
  style={{ marginTop, marginBottom, marginLeft, marginRight }}
  to={`/companies/${companyId.split('/')[0]}`}
>
  {companyId.split('/')[0]}
</NavLink>
        );
      })}
    </div>
  );
};

export default MainDepartments;
