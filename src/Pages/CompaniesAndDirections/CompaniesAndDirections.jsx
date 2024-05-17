import { useParams } from "react-router-dom";
import "./CompaniesAndDirections.scss";
import "../../style/vars.scss";
import CompanyPage from "../../Components/CompanyPage/CompanyPage";
import DataProvider from "../../Components/DataProvider/DataProvider";
import data from "../../../data.json"


function CompaniesAndDirections() {
  const { companyId, directionId } = useParams();

  const selectedCompany = data.companies.find((company) => company.id === companyId);

  if (!selectedCompany) {
    console.log("Company not found for id:", companyId);
    return <div>Компания не найдена</div>;
  }

  const membersWorkingInCompany = data.members.filter((member) =>
    member.companies.some((company) => company.id === companyId && company.status === "Работает")
);

  return (
    <DataProvider data={data}>
      {({ getMembersData }) => {
        const membersData = getMembersData();

        return (
          <main className="companiesAndDirections__container">
            <div className="companiesAndDirections__main" key={selectedCompany.id}>
              {selectedCompany.name}
            </div>

            {directionId && <div>Выбранное направление: {directionId}</div>}

            <CompanyPage members={membersWorkingInCompany} />
          </main>
        );
      }}
    </DataProvider>
  );
}

export default CompaniesAndDirections;
