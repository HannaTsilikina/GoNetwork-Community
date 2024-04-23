
import React from 'react';
import data from '../../../data.json';
import './CompaniesAndDirections.scss';
import Members from '../members/Members';
import UniversalComponent from '../UniversalComponent/UniversalComponent';


function CompaniesAndDirections() {
    const filteredMembersCompany =
        data.members.filter(member => {
            if (member.companies.id === data.companies.id) {
                return member
            } else if (member.directions.id === data.directions.id) {
                return member
            }

        })

    const title = ({ dataType }) => {
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
    }


    return (
        <div className='cad-container'>
            <div className='cad-title'>{title}</div>
            <div className='cad-members'>
                {filteredMembersCompany.map((member) =>
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