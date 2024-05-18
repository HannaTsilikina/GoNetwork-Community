import "./CompanyPage.scss";
import "../../style/vars.scss";
import { generatePosition } from "../../helpers/commonFunctions";

export default function CompanyPage({ members }) {
  const positions = [];
  return (
    <div className="companiesAndDirections__users">
      {members.map((member, index) => {
        let position = generatePosition(positions, 50);
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${position[1]}vh`,
              left: `${position[0]}vw`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={member.photo}
              alt={`${member.firstName} ${member.lastName}`}
            />
          </div>
        );
      })}
    </div>
  );
}
