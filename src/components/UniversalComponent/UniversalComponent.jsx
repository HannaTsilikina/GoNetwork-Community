import React, { useState, useEffect } from 'react';

import data from '../../../data.json';
import '../UniversalComponent/UniversalComponent.scss';


const UniversalComponent = ({ filterBy }) => {
    const [filteredMembers, setFilteredMembers] = useState([]);

    useEffect(() => {
        if (filterBy) {
            const filtered = data.members.filter(member => {
                return member.companies === filterBy || member.directions === filterBy;
            });
            setFilteredMembers(filtered);
        } else {
            setFilteredMembers(data);
        }
    }, [filterBy]);

    return (
        <div>
            <h2>Employees List</h2>
            <ul>
                {filteredMembers.map(member => (
                    <li key={member.id}>{member.firstName} {member.lastName}</li>
                ))}
            </ul>
        </div>
    );
};


export default UniversalComponent;




/*  <h1>{dataType === 'company' ? 'Компании' : 'Направления'}</h1>
            <ul>
                {dataToShow.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>`*/



/*
  return (
<div className='title'>
<div className='title-name'>{props.name}</div>
<div className='title-id'>{props.id}</div>
</div>
);*/