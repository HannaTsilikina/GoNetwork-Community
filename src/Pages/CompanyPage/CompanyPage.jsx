import "./CompanyPage.scss";
import data from "../../../data.json";
import MainDepartments from "../../Components/Main/MainScreen/MainDepartments/MainDepartments";
import { randomIntFromInterval } from "../../helpers/commonFunctions";

const CompanyPage = () => {
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

  let uniqueCompaniesPositions = [];
  for (let i = 0; i < uniqueCompanies.length; i++) {
    if (
      i === randomIntFromInterval(0, 20) ||
      i === randomIntFromInterval(0, 20) ||
      i === randomIntFromInterval(0, 20) ||
      i === randomIntFromInterval(0, 20) ||
      i === randomIntFromInterval(0, 20) ||
      i === randomIntFromInterval(0, 20) ||
      i === randomIntFromInterval(0, 20)
    ) {
      uniqueCompaniesPositions = [...uniqueCompaniesPositions, ""];
    }
    uniqueCompaniesPositions = [
      ...uniqueCompaniesPositions,
      uniqueCompanies[i],
    ];
  }

  

  return (
    <main className="mainscreen__main">
      <MainDepartments arrayOfCompanies={uniqueCompaniesPositions} />
    </main>
  );
};
export default CompanyPage;
