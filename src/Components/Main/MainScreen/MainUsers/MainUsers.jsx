import { Link } from "react-router-dom";
import "./MainUsers.scss";
import "./../MainScreen.scss";
import user from "../../../../assets/images/members/member.png";
import { useState, useEffect } from "react";

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

const MainUsers = ({ arrayOfMembers }) => {
  const [positions, setPositions] = useState([]);
  const [isIntersectingThreshold, setIsIntersectingThreshold] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const updateIntersectingThreshold = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setIsIntersectingThreshold({ top: 18, left: 21 });
      } else if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
        setIsIntersectingThreshold({ top: 15, left: 18 });
      } else if (window.innerWidth >= 1366 && window.innerWidth <= 1920) {
        setIsIntersectingThreshold({ top: 19, left: 20 });
      }
    };

    updateIntersectingThreshold();

    const handleResize = () => {
      updateIntersectingThreshold();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const maxAttemptsPerElement = 35;
    const maxElements = 10;
    const maxAttempts = maxAttemptsPerElement * maxElements;

    const generateUniquePositions = (maxAttempts) => {
      const newPositions = [];
      for (let i = 0; i < maxElements; i++) {
        let attempts = 0;
        let newPosition;
        let isIntersecting;
        do {
          newPosition = {
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          };
          isIntersecting = newPositions.some(
            ({ top, left }) =>
              Math.abs(parseFloat(top) - parseFloat(newPosition.top)) <
                isIntersectingThreshold.top &&
              Math.abs(parseFloat(left) - parseFloat(newPosition.left)) <
                isIntersectingThreshold.left
          );
          attempts++;
        } while (isIntersecting && attempts < maxAttempts);
        if (!isIntersecting) {
          newPositions.push(newPosition);
        }
      }
      return newPositions;
    };

    const initialPositions = generateUniquePositions(maxAttempts);
    setPositions(initialPositions);
  }, [isIntersectingThreshold]);

  return (
    <div className="mainscreen-main__workers">
      {arrayOfUsers.map((user, index) => (
        <Link
          key={index}
          className="sp__container-result-users-user"
          style={{
            top: positions[index] ? positions[index].top : "0%",
            left: positions[index] ? positions[index].left : "0%",
          }}
        >
          <img src={user} alt="image-user" />
        </Link>
      ))}
    </div>
  );
};
export default MainUsers;
