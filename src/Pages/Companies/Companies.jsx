import { useParams } from "react-router-dom";
import "./Companies.scss";
import "../../style/vars.scss";
import CompanyPage from "../../Components/CompanyPage/CompanyPage";
import DataProvider from "../../Components/DataProvider/DataProvider";
import data from "../../../data.json";

function Companies() {
  const { id } = useParams();

  const findCompany = (array, idOfComp) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === +idOfComp) return array[i];
    }
  };
  const findMembers = (array, idOfComp) => {
    const members = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].companies.length; j++) {
        console.log(array[i].companies[j].id, +idOfComp);
        if (array[i].companies[j].id === +idOfComp) {
          members.push(array[i]);
        }
      }
    }
    return members;
  };

  const selectedCompany = findCompany(data.companies, id);
  if (!selectedCompany) {
    console.log("Company not found for id:", id);
    return <div>Компания не найдена</div>;
  }
  const membersWorkingInCompany = findMembers(data.members, id);
  console.log(membersWorkingInCompany);

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
            {membersWorkingInCompany.map((member) => {
              return <div>{member.firstName}</div>;
            })}
            <CompanyPage members={membersWorkingInCompany} />
          </main>
        );
      }}
    </DataProvider>
  );
}

export default Companies;
