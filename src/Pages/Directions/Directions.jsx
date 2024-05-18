import { useParams } from "react-router-dom";
import "./Directions.scss";
import "../../style/vars.scss";
import CompanyPage from "../../Components/CompanyPage/CompanyPage";
import DataProvider from "../../Components/DataProvider/DataProvider";
import data from "../../../data.json";

function CompaniesAndDirections() {
  const { id } = useParams();

  const selectedDirection = data.companies.find((company) => company.id === id);

  if (!selectedDirection) {
    console.log("Company not found for id:", id);
    return <div>Компания не найдена</div>;
  }

  const membersWorkingInCompany = data.members.filter((member) =>
    member.companies.some(
      (company) => company.id === id && company.status === "Работает"
    )
  );

  return (
    <DataProvider data={data}>
      {({ getMembersData }) => {
        const membersData = getMembersData();

        return (
          <main className="companiesAndDirections__container">
            <div
              className="companiesAndDirections__main"
              key={selectedCompany.id}
            >
              {selectedCompany.name}
            </div>

            {id && <div>Выбранное направление: {id}</div>}

            <CompanyPage members={membersWorkingInCompany} />
          </main>
        );
      }}
    </DataProvider>
  );
}

export default CompaniesAndDirections;
