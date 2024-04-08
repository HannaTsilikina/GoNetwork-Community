import { Link } from "react-router-dom";
import "./MainScreen.scss";
import user from "../../../assets/images/members/member.png";

const MainScreen = () => {
  return (
    <main className="mainscreen__main">
      <div className="mainscreen-main__item"></div>
      <div className="mainscreen-main__item">
        <Link>
          <img
            className="mainscreen__user user-left-start"
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-left-end"
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-left-start "
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-center"
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-right-end "
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-left-start"
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-right-start"
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-center"
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-left-end"
            src={user}
            alt="logo-image"
          />
        </Link>
        <Link>
          <img
            className="mainscreen__user user-center"
            src={user}
            alt="logo-image"
          />
        </Link>
      </div>
      <div className="mainscreen-main__item"></div>
    </main>
  );
};
export default MainScreen;
