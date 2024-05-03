const data = {
    companyName: "Community",
    membersData: [
        { id: 1, name: "Даша" },
        { id: 2, name: "Маша" },
        { id: 3, name: "Петя" },
        { id: 4, name: "Настя" },
        { id: 5, name: "Аня" },
        { id: 6, name: "Вика" },
        { id: 7, name: "Лера" },
        { id: 8, name: "Лиза" },
        { id: 9, name: "Оля" },
        { id: 10, name: "Лена" },
        { id: 11, name: "Таня" },
        { id: 12, name: "Катя" },
        { id: 13, name: "Юля" },
        { id: 14, name: "Арина" },
        { id: 15, name: "Полина" },
        { id: 16, name: "Ксюша" },
        //{ id: 17, name: "Марина" },
        // { id: 18, name: "Ева" },
        // { id: 19, name: "Даздраперма" },
        // { id: 20, name: "Наташа" },
        //   { id: 21, name: "Яна" },
        //   { id: 22, name: "Люся" },
        //   { id: 23, name: "Инна" },
        //   { id: 24, name: "Рада" },
        //   { id: 25, name: "Рия" },
        // { id: 26, name: "Нора" },
        // { id: 27, name: "Алиса" },
        // оставлено 15, т.к. если более 15, то страница перестаёт грузиться и зависает :(
    ]
};

function CompanyPage({ companyName, membersData }) {
    const circles = [];
    const positions = [];
    const colors = ["#CB6ED3", "#DE99E4", "#FBDAFE", "#EBC2EF"];

    // Создаем кружочек для компании
    circles.push(<div key="company" style={{ width: '200px', height: '200px', background: 'blue', borderRadius: '50%' }}>{companyName}</div>);

    // Создаем кружочки для каждого сотрудника
    membersData.forEach((member, i) => {
        let x, y;
        let isIntersecting;

        // Генерируем кружочек, пока он не пересечется с другими кружочками
        do {
            x = Math.random() * 90;
            y = Math.random() * 90;

            isIntersecting = positions.some(pos => {
                const dx = pos[0] - x;
                const dy = pos[1] - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < 20; // Расстояние между кружочками
            });
        } while (isIntersecting);

        positions.push([x, y]);

        const size = Math.floor(Math.random() * 51) + 50;
        const color = colors[i % colors.length];

        circles.push(<div key={i} style={{ width: `${size}px`, height: `${size}px`, background: color, borderRadius: '50%', position: 'absolute', top: `${y}vh`, left: `${x}vw` }}>
            {member.name}
        </div>);
    });

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            {circles}
        </div>
    );
}

function Company_Directions_Page() {
    return <CompanyPage companyName={data.companyName} membersData={data.membersData} />;
}


export default Company_Directions_Page;


/*
import React from 'react';
import data from '../../../data.json';


function CompaniesAndDirections(dataType) {





    const { companies, directions } = data;

    let dataToShow;

    // Определяем, какие данные нужно отобразить в зависимости от входного параметра
    if (dataType === "companies") {
        dataToShow = companies;
    } else if (dataType === "directions") {
        dataToShow = directions;
    }

    return (
        <div className='title'>
            <h1> {dataType === "companies" ? companies : directions} </h1>

        </div>
    )

}

export default CompaniesAndDirections;*/


/*
import React, { useState } from 'react';
import data from '../../../data.json';
import './CompaniesAndDirections.scss';
import Members from '../members/Members';
import UniversalComponent from '../UniversalComponent/UniversalComponent';


function CompaniesAndDirections(dataType) {

    const { companies, directions } = data;

    let dataToShow;

    // Определяем, какие данные нужно отобразить в зависимости от входного параметра
    if (dataType === "companies") {
        dataToShow = data.companies.name;
    } else if (dataType === "directions") {
        dataToShow = data.directions.name;
    }
    console.log(dataToShow);
    return (
        <div className='cad-container'>
            <div className='cad-title'>
                {data.companies.map((company) =>
                    <div key={company.id}>
                        <UniversalComponent name={company.name}></UniversalComponent>
                    </div>
                )}
            </div>
            <div className='cad-members'>
                {data.members.map((member) =>
                    <div key={member.id}>
                        <Members lastName={member.lastName}
                            firstName={member.firstName}
                        >
                        </Members>
                    </div>
                )
                }


            </div>
        </div>
    )
}

export default CompaniesAndDirections;

/*

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

  <h1> {dataType === "companies" ? companies : directions}</h1>
                {dataToShow.map((company, direction) => (
                    <div key={company.id}>
                        <UniversalComponent name={company.name}>
                        </UniversalComponent>
                    </div>
                )
                )}
            </div>

export default function CompaniesAndDirections() {

    const [selectedCompanyId, setSelectedCompanyId] = useState(null);
    const [selectedDirectionId, setselectedDirectionId] = useState(null);


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
                <div className='cad__container-companies'>
                    <h2>Компания:</h2>
                    <option value="">Выберите компанию</option>
                    <CompanySelect
                        companies={data.companies}
                        onChange={handleCompanyChange} /></div>
            </div>


            <div>
                <h2>Направление:</h2>
                <option value="">Выберите направление</option>
                <DirectionSelect
                    directions={data.directions}
                    onChange={handleDirectionChange} />
            </div>

            <div>
                <h2>Работники Компании:</h2>
                <MembersList members={filteredMembersCompany} />
            </div>

            <div className='cad__container-members-directions'>

                <MembersList members={filteredMembersDirection} />
            </div>
        </div>
    )

};*/






/*
import React from 'react';

const usersData = require('./users.json');

const UserList = ({ users, filterBy }) => {
  const filteredUsers = users.filter(user => {
    if (filterBy.type === 'company') {
      return user.company === filterBy.value;
    } else if (filterBy.type === 'direction') {
      return user.direction === filterBy.value;
    }
    return true; // Показать всех пользователей, если нет фильтра
  });

  return (
    <div>
      {filteredUsers.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.company}</p>
          <p>{user.direction}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const users = usersData.filter(item => item.type === 'user').map(item => item.data);
  
  const companyFilter = { type: 'company', value: 'Example Company' };
  const directionFilter = { type: 'direction', value: 'Example Direction' };

  return (
    <div>
      <h2>Users from Company</h2>
      <UserList users={users} filterBy={companyFilter} />

      <h2>Users from Direction</h2>
      <UserList users={users} filterBy={directionFilter} />
    </div>
  );
};

export default App;
*/


/* const title = ({ dataType }) => {
         // json файл содержит объект с ключами 'companies' и 'directions'
         const { companies, directions } = data;
 
         let dataToShow;
 
         // Определяем, какие данные нужно отобразить в зависимости от входного параметра
         if (dataType === 'company') {
             dataToShow = companies;
         } else if (dataType === 'direction') {
             dataToShow = directions;
         } else {
             return <div>Неправильный тип данных</div>;
         }
     }*/
