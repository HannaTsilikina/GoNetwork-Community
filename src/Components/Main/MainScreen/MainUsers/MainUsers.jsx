import { Link } from "react-router-dom";
import "./MainUsers.scss";
import "./../MainScreen.scss";
import user from "../../../../assets/images/members/member.png";

const arrayOfUsers = [
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
];
const StylePosition = () => {
  const arraysOfPosition = [
    "position-left-start",
    "position-left-end",
    "position-center",
    "position-right-end",
    "position-right-start",
  ];

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const index = randomIntFromInterval(0, 4);

  return arraysOfPosition[index];
};
const MainUsers = () => {
  return (
    <div className="mainscreen-main__workers">
      {arrayOfUsers.map((item, index) => {
        let position = StylePosition();
        return (
          <Link key={index}>
            <img
              className={`mainscreen__user ${position} `}
              src={user}
              alt="image-user"
            />
          </Link>
        );
      })}
    </div>
  );
};
export default MainUsers;
