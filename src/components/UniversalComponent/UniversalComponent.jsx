import React from 'react';

import '../UniversalComponent/UniversalComponent.scss';


function UniversalComponent(props) {


    return (
        <div className='all-title'>
            <div className='title-name'> {props.name}</div>
        </div>
    )

}

export default UniversalComponent;




/*  <h1>{dataType === 'company' ? 'Компании' : 'Направления'}</h1>
            <ul>
                {dataToShow.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>`*/



/*
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
    );*/


/* return (
     <div className='all-item'>
         <div className='item-name'>{props.name}</div>
         <div className='item-id'>{props.id}</div>
 
     </div>
 )*/