import "./CompaniesAndDirections.scss";
import "../../style/vars.scss";
import "../../components/CompanyPage/CompanyPage";
import CompanyPage from "../../components/CompanyPage/CompanyPage";
import data from "../../../data.json";

function Company_Directions_Page({ companyName }) {
  return (
    <main className="companiesAndDirections__container">
      <div className="companiesAndDirections__main" key="company">
        {companyName}
      </div>

      <CompanyPage members={data.members} />
    </main>
  );
}

export default Company_Directions_Page;
