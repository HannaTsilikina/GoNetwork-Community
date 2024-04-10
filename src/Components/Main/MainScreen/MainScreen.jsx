import MainDepartments from "./MainDepartments/MainDepartments";
import MainProfessions from "./MainProfessions/MainProfessions";
import "./MainScreen.scss";
import MainUsers from "./MainUsers/MainUsers";

const MainScreen = () => {
  return (
    <main className="mainscreen__main">
      <MainDepartments />
      <MainUsers />
      <MainProfessions />
    </main>
  );
};
export default MainScreen;
