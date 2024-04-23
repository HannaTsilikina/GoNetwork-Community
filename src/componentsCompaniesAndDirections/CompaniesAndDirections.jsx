import React, { useState, } from 'react';
import data from '../../data.json';
import './CompaniesAndDirections.scss';


const CompaniesAndDirections = () => {
    const [selectedCompanyId, setSelectedCompanyId] = useState(null);
    const [selectedDirectionId, setselectedDirectionId] = useState(null);


    const CompanySelect = ({ companies, onChange }) => (
        <select onChange={onChange}>
            {companies.map((company) => (
                <option key={company.id} value={company.id}>
                    {company.name}
                </option>
            ))}
        </select>
    );

    const DirectionSelect = ({ directions, onChange }) => (
        <select onChange={onChange}>
            {directions.map((direction) => (
                <option key={direction.id} value={direction.id}>
                    {direction.name}
                </option>
            ))}
        </select>
    );

    const MembersList = ({ members }) => {
        return (
            <div>
                {members.map((member) => (
                    <div key={member.id}>
                        <p>
                            {member.firstName} {member.lastName}
                        </p>
                    </div>
                ))}
            </div>
        );
    };

    const handleCompanyChange = (e) => {
        setSelectedCompanyId(parseInt(e.target.value));
    };

    const handleDirectionChange = (e) => {
        setselectedDirectionId(parseInt(e.target.value));
    };

    const filteredMembersCompany = data.members.filter(
        (member) =>
            !selectedCompanyId ||
            member.companies.some(
                (company) => company.id === selectedCompanyId && company.status === "Работает"
            ));

    const filteredMembersDirection = data.members.filter(
        (member) =>
            !selectedDirectionId ||
            member.directions.some(
                (direction) => direction.id === selectedDirectionId
            ));

    return (
        <div>
            <div className='cad__container'>
                <div>
                    <h2>Компания:</h2>
                    <option value=" ">Выберите компанию</option>
                    <CompanySelect
                        companies={data.companies}
                        onChange={handleCompanyChange} />
                </div>
            </div>

            <div>
                <h2>Направление:</h2>
                <option value=" ">Выберите направление</option>
                <DirectionSelect
                    directions={data.directions}
                    onChange={handleDirectionChange} />
            </div>

            <div>
                <h2>Работники Компании:</h2>
                <MembersList members={filteredMembersCompany} />
            </div>

            <div>
                <h2>Работники Направления:</h2>
                <MembersList members={filteredMembersDirection} />
            </div>
        </div>
    )

};
export default CompaniesAndDirections;
