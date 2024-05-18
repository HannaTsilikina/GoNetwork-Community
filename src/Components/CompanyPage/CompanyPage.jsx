import { useState } from "react";
import "./CompanyPage.scss";
import "../../style/vars.scss";
import { generatePosition } from "../../helpers/commonFunctions";

// export default function CompanyPage({ members }) {
//   const positions = [];
//   return (
//     <div className="companiesAndDirections__users">
//       {members.map((member, index) => {
//         let position = generatePosition(positions, 50);
export default function CompanyPage({ company }) {
  const [positions, setPositions] = useState([]);

  function generatePosition() {
    setPositions((prevPositions) => {
      let x, y;
      let isIntersecting;

      do {
        x = Math.random() * 90;
        y = Math.random() * 50;

        isIntersecting = prevPositions.some((pos) => {
          const dx = pos[0] - x;
          const dy = pos[1] - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < 15;
        });
      } while (isIntersecting);

      return [...prevPositions, [x, y]];
    });

    return [x, y];
  }

  return (
    <div className="companiesAndDirections__users">
      {company &&
        company.members.map((member, index) => {
          let position = generatePosition();
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
