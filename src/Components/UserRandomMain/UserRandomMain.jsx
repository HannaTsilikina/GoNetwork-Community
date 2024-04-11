import React, { useState, useEffect } from 'react';
import data from '../../../data.json';

const UserRandomMain = () => {
  const members = data.members;
  const companies = data.companies;
  const directions = data.directions;

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedDirections, setSelectedDirections] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  useEffect(() => {
    const getRandomMembers = () => {
      const selectedMembersArray = [];
      const selectedIds = new Set();

      while (selectedMembersArray.length < 10) {
        const randomIndex = Math.floor(Math.random() * members.length);
        const randomMember = members[randomIndex];

        if (selectedIds.has(randomMember.id)) {
          continue;
        }

        selectedMembersArray.push(randomMember);
        selectedIds.add(randomMember.id);
      }

      setSelectedMembers(selectedMembersArray);

      const uniqueCompanies = Array.from(new Set(selectedMembersArray.flatMap(member => member.companies)));
      setSelectedCompanies(uniqueCompanies);

      const uniqueDirections = Array.from(new Set(selectedMembersArray.flatMap(member => member.directions.map(direction => direction.id))));
      setSelectedDirections(uniqueDirections);
    };

    getRandomMembers();
  }, [members]);

  return (
    <div>
      <div>
        <h2>10 members:</h2>
        {selectedMembers.map(member => (
          <div key={member.id}>
            <p>{member.firstName} {member.lastName}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Компании:</h2>
        {selectedCompanies.map(companyId => {
          const company = companies.find(company => company.id === companyId);
          return <div key={company.id}>{company.name}</div>;
        })}
      </div>

      <div>
        <h2>Направления:</h2>
        {selectedDirections.map(directionId => {
          const direction = directions.find(direction => direction.id === directionId);
          return <div key={direction.id}>{direction.name}</div>;
        })}
      </div>
    </div>
  );
};

export default UserRandomMain;