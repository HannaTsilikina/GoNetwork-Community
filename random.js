import data from "./data.json";

function getRandomData() {
    const randomMembers = [];
    const companies = new Map();
    const directions = new Map();

    while (randomMembers.length < 10) {
        const randomIndex = Math.floor(Math.random() * data.members.length);
        const member = data.members[randomIndex];
        randomMembers.push(member);

        member.companies.forEach(company => companies.set(company.id, getCompanyName(company.id)));
        member.directions.forEach(direction => directions.set(direction.id, getDirectionName(direction.id)));
    }

    const companiesArray = Array.from(companies, ([id, name]) => ({ id, name }));
    const directionsArray = Array.from(directions, ([id, name]) => ({ id, name }));

    return {
        randomMembers,
        companies: companiesArray,
        directions: directionsArray
    };
}

function getCompanyName(companyId) {
    const company = data.companies.find(company => company.id === companyId);
    return company ? company.name : 'Unknown Company';
}

function getDirectionName(directionId) {
    const direction = data.directions.find(direction => direction.id === directionId);
    return direction ? direction.name : 'Unknown Direction';
}

export default getRandomData;


