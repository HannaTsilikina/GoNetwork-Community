import { useState, useEffect, useMemo } from "react";
import userData from "../../../data.json";
import "./SearchingPage.scss";
import UserComponent from "../../Components/UserComponent/UserComponent";
import generateUniquePositions from "../../helpers/generateUniquePositions.js";

export default function SearchingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");
  const [positions, setPositions] = useState([]);
  const [isIntersectingThreshold, setIsIntersectingThreshold] = useState({
    top: 0,
    left: 0,
  });
  const [activeUser, setActiveUser] = useState(null);

  const users = useMemo(() => userData.members, []);

  useEffect(() => {
    if (searchTerm.length >= 3 && searchTerm.length <= 5) {
      const filteredUsers = users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredUsers);
      setSearchMessage("");
    } else {
      const filteredUsers = users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredUsers);
      if (searchTerm.length > 5 && filteredUsers.length === 0) {
        setSearchMessage("Пользователь не найден");
      } else {
        setSearchMessage("");
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    const updateIntersectingThreshold = () => {
      const windowWidth = window.innerWidth;
      let newThreshold;
      if (windowWidth >= 768 && windowWidth < 1024) {
        newThreshold = { top: 10, left: 12 };
      } else if (windowWidth >= 1024 && windowWidth <= 1366) {
        newThreshold = { top: 13, left: 10 };
      } else if (windowWidth >= 1366 && windowWidth <= 1920) {
        newThreshold = { top: 11, left: 10 };
      } else if (windowWidth > 1920) {
        newThreshold = { top: 15, left: 10 };
      }
      setIsIntersectingThreshold(newThreshold);
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
    setPositions(generateUniquePositions(isIntersectingThreshold, users));
  }, [users, isIntersectingThreshold]);

  const handleSearchInputChange = (event) => {
    const inputText = event.target.value;
    setSearchTerm(inputText);
  };

  const calculateContainerHeight = (users) => {
    let baseHeight = 5; // Начальная высота контейнера в em
    let perAdditionalUserHeight = 0.5; // Дополнительная высота за каждого дополнительного пользователя

    if (users.length <= 10) {
      return `${baseHeight}em`;
    } else if (users.length > 120) {
      return `${baseHeight + 15}em`; // Максимальная высота для 120 пользователей
    } else {
      let additionalUsers = users.length - 10;
      let additionalHeight = additionalUsers * perAdditionalUserHeight;
      return `calc(${baseHeight}em + ${additionalHeight}em)`;
    }
  };

  const calculateContainerWidth = (users) => {
    let baseWidth = 10; // Начальная ширина контейнера в em
    let perAdditionalUserWidth = 0.5; // Дополнительная ширина за каждого дополнительного пользователя

    if (users.length <= 10) {
      return `${baseWidth}em`;
    } else if (users.length > 120) {
      return `${baseWidth + 10}em`; // Максимальная ширина для 120 пользователей
    } else {
      let additionalUsers = users.length - 10;
      let additionalWidth = additionalUsers * perAdditionalUserWidth;
      return `calc(${baseWidth}em + ${additionalWidth}em)`;
    }
  };

  const handleUserHoverEnter = (userName) => {
    setActiveUser(userName);
  };

  const handleUserHoverLeave = () => {
    setActiveUser(null);
  };

  return (
    <div className="sp__container">
      <div className="sp__container-input">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Введите имя"
        />
        <span></span>
      </div>
      <div className="sp__container-result">
        {searchMessage && <p>{searchMessage}</p>}
        {searchResults.length > 0 && (
          <div
            className="sp__container-result-users"
            // style={{
            //   height: calculateContainerHeight(users),
            //   width: calculateContainerWidth(users),
            // }}
          >
            {searchResults.map((user, index) => (
              <div
                key={user.id}
                className="sp__container-result-users-user-wrapper"
                style={{
                  top: positions[index] ? positions[index].top : "0%",
                  left: positions[index] ? positions[index].left : "0%",
                }}
              >
                <UserComponent
                  user={user}
                  className="sp__container-result-users-user"
                  onUserHoverEnter={handleUserHoverEnter}
                  onUserHoverLeave={handleUserHoverLeave}
                  isActive={activeUser === `${user.firstName} ${user.lastName}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
