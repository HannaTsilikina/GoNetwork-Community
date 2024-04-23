import MainDepartments from "./MainDepartments/MainDepartments";
import MainProfessions from "./MainProfessions/MainProfessions";
import "./MainScreen.scss";
import MainUsers from "./MainUsers/MainUsers";
import data from "../../../../data.json";

const MainScreen = () => {
  const members = data.members;

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const shuffledMembers = shuffleArray(members);
  const selectedMembers = shuffledMembers.slice(0, 10);
  const selectedMembersID = selectedMembers.map((item) => item.id);
  const uniqueCompaniesID = new Set(
    selectedMembers.flatMap((member) =>
      member.companies.map((company) => company.id)
    )
  );
  const uniqueCompanies = data.companies.map((company) => {
    {
      if (data.companies.id === uniqueCompaniesID.value) return company.name;
    }
  });
  const uniqueDirectionsID = new Set(
    selectedMembers.flatMap((member) =>
      member.directions.map((direction) => direction.id)
    )
  );
  const uniqueDirections = data.directions.map((direction) => {
    {
      if (data.directions.id === uniqueDirectionsID.value)
        return direction.name;
    }
  });

  return (
    <main className="mainscreen__main">
      <MainDepartments arrayOfCompanies={uniqueCompanies} />
      <MainUsers arrayOfMembers={selectedMembersID} />
      <MainProfessions arrayOfProfessions={uniqueDirections} />
    </main>
  );
};
export default MainScreen;
