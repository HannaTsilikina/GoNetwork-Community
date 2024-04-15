import React, { useState, useEffect } from 'react';
import data from '../../data.json';
import './CompaniesAndDirections.scss';


const CompaniesAndDirections = () => {


    const [companies, setCompanies] = useState([]);
    const [directions, setDirections] = useState([]);
    const [members, setMembers] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedDirection, setSelectedDirection] = useState(null);

    useEffect(() => {

        setCompanies(data.companies);
        setDirections(data.directions);
        setMembers(data.members);

    }, []);

    const displayMembers = () => {
        let filteredMembers = members;
        if (selectedCompany) {

            filteredMembers = data.members.filter(members => members.companies.id === members.id &&  members.companies.status ===  'Работает');
        }
        if (selectedDirection) {
            filteredMembers = data.members.filter(member => member.directions.id === member.id);
        }
        return filteredMembers.map(member => (
            <div key={members.id}>
                <p> {member.firstName} {member.lastName}</p>
            </div>
        ));
    };

    return (
        <div>
            <div>
                <h2>Компания:</h2>
                <select onChange={(e) => setSelectedCompany(e.target.value)}>
                    <option value="">Выберите компанию</option>
                    {companies.map(company => (
                        <option key={company.id} value={company.name}>
                            {company.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h2>Направление:</h2>
                <select onChange={(e) => setSelectedDirection(e.target.value)}>
                    <option value="">Выберите направление</option>
                    {directions.map(direction => (
                        <option key={direction.id} value={direction.name}>
                            {direction.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h2>Работники:</h2>
                {displayMembers()}
            </div>
        </div>
    );

};
export default CompaniesAndDirections;
