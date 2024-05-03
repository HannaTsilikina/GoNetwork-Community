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
        { id: 17, name: "Марина" },
        { id: 18, name: "Ева" },
        { id: 19, name: "Даздраперма" },
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
    circles.push(<div key="company" style={{ width: '200px', height: '200px', background: 'blue', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{companyName}</div>);

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
                return distance < 15; // Расстояние между кружочками
            });
        } while (isIntersecting);

        positions.push([x, y]);

        const size = Math.floor(Math.random() * 51) + 50;
        const color = colors[i % colors.length];

        circles.push(<div key={i} style={{ width: `${size}px`, height: `${size}px`, background: color, borderRadius: '50%', position: 'absolute', top: `${y}vh`, left: `${x}vw`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

export default CompaniesAndDirections;*/
